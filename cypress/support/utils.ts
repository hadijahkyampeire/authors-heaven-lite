import { Store } from "redux";
import { AppState } from "../../src/types";

export const getStore = (): Cypress.Chainable<Store<AppState>> =>
  cy.window().its("store");

export const isLoggedIn = (): Cypress.Chainable<boolean> =>
  getStore()
    .invoke("getState")
    .its("auth")
    .its("isLoggedIn") || cy.wrap(false);

export const currentUser = (): Cypress.Chainable<string> =>
  getStore()
    .invoke("getState")
    .its("auth")
    .its("user")
    .its("username") || cy.wrap("testUser");

export const getAuthToken = () =>
  getStore()
    .invoke("getState")
    .its("auth")
    .its("user")
    .its("tokens")
    .then(tokens => `Token ${tokens.access}`);

export const getUser = () => Cypress.env("EMAIL") || "testUser@authorheaven.com";
export const getPassword = () => Cypress.env("PASSWORD") || "Test@123";
