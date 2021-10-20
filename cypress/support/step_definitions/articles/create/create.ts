/// <reference types="cypress" />
/// <reference types="../../../" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the articles page", () => {
  cy.visit("/articles");
});

When("the user clicks on the create new article button", () => {
  cy.get('.add-article-button').click();
});

Then("the user should be on the create new article page", () => {
  cy.url().should("contain", "/articles/new/");
});

Given("the user is on the create new article page", () => {
  cy.visit("/articles/new");
});

When("the user enters the article information", () => {
  cy.get("#title").type('test title');
  cy.get("#description").type('test description');
  cy.get("#body").type('test body');
});

When("the user enters the published article information", () => {
  cy.get("#title").type('test title published');
  cy.get("#description").type('test description published');
  cy.get("#body").type('test body to publish');
});

Then(/the user clicks on the "(.+)" button/, (buttonId: string) => {
  cy.get(buttonId).click();
});

Then("the user submits the form", () => {
  cy.get("#create-as-draft").click();
});

Then("the new article should be created as a draft", () => {
  cy.url().should("not.contain", "/new");
  cy.url().should("not.contain", "/published")
});

Then("the new article should be created and published", () => {
  cy.url().should("not.contain", "/new");
  cy.url().should("contain", "/published")
});