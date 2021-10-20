/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login(email?: string, password?: string): Chainable<Subject>;
    logout(): Chainable<Subject>;
    deleteArticle(
      slug: string,
      isCleanup?: boolean
    ): Chainable<Subject>;
    createArticle(
      slug: string,
    ): Chainable<Subject>;
    getArticle(
      slug: string,
    ): Chainable<Subject>;
  }
}
