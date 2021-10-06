/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    logout(): Chainable<Subject>;
  }
}
