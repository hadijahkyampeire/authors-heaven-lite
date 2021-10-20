/// <reference types="cypress" />
/// <reference types="../../../" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { getArticleSlug } from '../../../utils';

Given("the user is on the edit article page", () => {
  cy.visit(`/articles/${getArticleSlug()}/edit`);
});

When("the user updates the article description", () => {
  cy.get("#description").clear().type('Edited description');
});

Then("the user clicks the update button", () => {
  cy.get("#update-as-draft").click();
});

Then("the article should be updated with a new description", () => {
  cy.url().should("not.contain", "/edit");
  cy
    .getArticle(getArticleSlug())
    .its('article')
    .its("description")
    .should("contain", "Edited description")
});
