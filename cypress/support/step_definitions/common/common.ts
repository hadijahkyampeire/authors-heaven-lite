/// <reference types="cypress" />
/// <reference types="../../" />

import { Given , Before, After } from "cypress-cucumber-preprocessor/steps";
import { 
  setArticleSlug, 
  getArticleSlug, 
  setPublishedArticleSlug, 
  getPublishedArticleSlug, 
  isLoggedIn
 } from "../../utils";

Given("the user is logged in", () => cy.visit("/login").login());

Given("an article exists", () => {
  const articleSlug = getArticleSlug();
  cy.createArticle(articleSlug).then(() => cy.waitUntil(() => cy.getArticle(articleSlug)));
});

Before({ tags: "@article" }, () => {
  setArticleSlug('test-title');
});

After({ tags: "@article" }, () => {
  isLoggedIn().then(loggedIn => {
    if (loggedIn) {
      const slug = getArticleSlug();
      cy.deleteArticle(slug, true);
    }
  });
});

Before({ tags: "@publishedArticle" }, () => {
  setPublishedArticleSlug('test-title-published');
});

After({ tags: "@publishedArticle" }, () => {
  isLoggedIn().then(loggedIn => {
    if (loggedIn) {
      const slug = getPublishedArticleSlug();
      cy.deleteArticle(slug, true);
    }
  });
});