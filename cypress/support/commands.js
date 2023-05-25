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

Cypress.Commands.add('getSwal', () => {
    return cy.get('.swal-modal');
});

Cypress.Commands.add('closeSwal', () => {
    cy.getSwal().then(($swal) => {
        if ($swal.find('.swal-close').length > 0) {
            cy.get('.swal-close').click();
        }
    });
});

Cypress.Commands.add('confirmSwal', () => {
    cy.getSwal().then(($swal) => {
        if ($swal.find('.swal-button--confirm').length > 0) {
            cy.get('.swal-button--confirm').click();
        }
    });
});

Cypress.Commands.add('cancelSwal', () => {
    cy.getSwal().then(($swal) => {
        if ($swal.find('.swal-button--cancel').length > 0) {
            cy.get('.swal-button--cancel').click();
        }
    });
});
