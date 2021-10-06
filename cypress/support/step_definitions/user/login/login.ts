/// <reference types="cypress" />
/// <reference types="../../../" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { currentUser, getPassword, getUser } from '../../../utils';

// ensure the user is logged out
Given("the user is not logged in", () => {
  cy.logout().visit("/login");
});

Given("the user is on the login page", () => {
  cy.visit("/login");
});

Given("the user navigates to the articles page", () => {
  cy.visit("/articles");
});

When("the user inputs the right information", () => {
  cy.get("#login-email").type(getUser());
  cy.get("#login-password").type(getPassword());
});

When("the user inputs the some information", () => {
  cy.get("#login-email").type('fake@user.com');
  cy.get("#login-password").type('fakeuser1');
});

When("the user enters their password", () => {
  cy.get("#login-password").type(getPassword());
});

When("the user enters their username", () => {
  cy.get("#login-email").type(getUser());
});

Then("the user submits the form", () => {
  cy.get("form").submit();
});

Then("the user should go to articles page", () => {
  cy.url().should("contain", "/articles");
});

Then("the backend's authentication failed message should be visible", () => {
  cy.get('[data-testid="notification-toaster"]').should("be.visible");
});

Then(
  /(?:the user should still be on the login page)|(?:the user should be redirected to the login page)/,
  () => {
    cy.url().should("contain", "/login");
  }
);

Then(/the error message "(.+)" should be visible/, (errMsg: string) => {
  cy.findByText(errMsg).should("be.visible");
});
