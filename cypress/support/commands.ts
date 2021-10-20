/// <reference types="." />
import "@testing-library/cypress/add-commands";
import { LOGOUT_ACTION, LOGIN_ACTION } from '../../src/actions/user/actionTypes';
import UserService from '../../src/services/user';
import {
  getStore,
  getUser,
  getPassword,
  getAuthToken,
  getArticleSlug
} from "./utils";

const apiUrl: string = Cypress.env("API_URL") || "http://authors-social-platform.herokuapp.com/api/v1";

Cypress.Commands.add("logout", () => {
  // if we're not on a page, we're not logged in
  cy.url().then(url => {
    if (url === undefined || url === null || url === "about:blank") {
      return;
    }

    getStore().then(store => {
      // if we don't have  store, we're not logged in
      if (typeof store === "undefined") {
        return;
      }

      store.dispatch({ type: LOGOUT_ACTION });
    });
  });
});

Cypress.Commands.add(
  "login",
  (email: string = getUser(), password: string = getPassword()) => {
    cy.url().then(url => {
      if (url === undefined || url === null || url === "about:blank") {
        cy.visit("/login");
      }

      getStore().then(store => {
        if (store === undefined) {
          throw "Could not load the Redux store for this application";
        }

        // already logged in
        if (
          store.getState().auth.user?.email === email &&
          store.getState().auth.user?.tokens.access
        ) {
          return;
        }

        const token = Cypress.env("TOKEN");

        if (!token) {
          cy.request({
            method: "POST",
            url: `${apiUrl}/auth/users/login/`,
            body: {
              email: email,
              password: password
            }
          }).then(response => {
            store.dispatch({
              type: LOGIN_ACTION,
              payload: response.body
            });
            const { user } = response.body;
            localStorage.setItem('user', JSON.stringify(user));
          });
        } else {
          store.dispatch({ type: LOGIN_ACTION, payload: { token: token } });
        }
      });
    });
  }
);

Cypress.Commands.add(
  "createArticle",
  (
    slug: string = getArticleSlug()
  ) => {
    getAuthToken().then(authToken =>
      cy
        .request({
          method: "GET",
          headers: {
            Authorization: authToken
          },
          url: `${apiUrl}/articles/${slug}/`,
          failOnStatusCode: false
        })
        .then(response => {
          if (response.status !== 200) {
            cy.request({
              method: "POST",
              headers: {
                Authorization: authToken
              },
              url: `${apiUrl}/articles/`,
              body: {
                slug,
                title: 'test title',
                description: 'test description',
                body: 'some test body'
              }
            });
          }
        })
    );
    return cy.wrap(slug);
  }
);

Cypress.Commands.add(
  "getArticle",
  (slug: string) => {
    return getAuthToken().then(authToken => {
      return cy
        .request({
          method: "GET",
          headers: {
            Authorization: authToken
          },
          url: `${apiUrl}/articles/${slug}/`
        })
        .its("body");
    });
  }
);

Cypress.Commands.add(
  "deleteArticle",
  (
    slug: string,
    isCleanup: boolean = false
  ) => {
    getAuthToken().then(authToken =>
      cy.request({
        method: "DELETE",
        headers: {
          Authorization: authToken
        },
        url: `${apiUrl}/articles/${slug}/`,
        failOnStatusCode: !!!isCleanup
      })
    );
  }
);
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
