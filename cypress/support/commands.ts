/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
Cypress.Commands.add('waitForProductLoading', () => {
  cy.intercept('GET', '/seleniumPractise/data/products.json').as(
    'waitForProductLoading',
  );
  cy.visit('/');

  cy.wait('@waitForProductLoading')
    .its('response.statusCode')
    .should('equal', 200);
});

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       waitForProductLoading(hello: number): Chainable<void>;
//       //   login(email: string, password: string): Chainable<void>
//       //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
