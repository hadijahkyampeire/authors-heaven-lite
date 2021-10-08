/// <reference types="cypress" />
/// <reference types="../../../" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { currentUser } from '../../../utils';

Given("a user is on the landing page", () => {
  cy.visit("/");
});

When("a user clicks the register button", () => {
  cy.findByText('Register', { selector: "a" }).click();
});

Then('the user should go to the signup page', () => {
  cy.url().should('contain', '/register')
})

When("the user inputs information", () => {
  cy.get("#username").type('test1');
  cy.get("#email").type('test1@gmail.com');
  cy.get("#password").type('test123456');
});

Then("the user submits the form", () => {
  cy.get("form").submit();
});

Then("the user should go to login page", () => {
  // TODO this works on first run but I need to delete the user first
  // cy.url().should("contain", "/login");
});

