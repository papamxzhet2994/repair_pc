import Profile from "../../src/components/Profile.svelte";
import '../support/commands.js';
describe('Profile.cy.js', () => {
  it('playground', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
  })
})
describe('Authentication', () => {
  it('displays login dialog when "Вход" button is clicked', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
    cy.get('.login').click();
    cy.get('#login-dialog').should('be.visible');
  });

  it('closes login dialog when close button is clicked', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
    cy.get('.login').click();
    cy.get('#login-dialog').should('be.visible');

    cy.get('#login-dialog i').click();
    cy.get('#login-dialog').should('not.be.visible');
  });




  it('allows users to log in with correct credentials', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
    cy.get('.login').click();
    cy.get('#login-dialog').should('be.visible');

    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password');

    cy.get('#login-dialog form').submit();

    cy.get('.logged').should('be.visible');
    cy.get('.logout').should('be.visible');
  });

  it('displays registration dialog when "Зарегистрироваться" link is clicked', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
    cy.get('.login').click();
    cy.get('#login-dialog').should('be.visible');

    cy.get('#login-dialog a').click();
    cy.get('#registration-dialog').should('be.visible');
  });

  it('allows users to register with valid credentials', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
    cy.get('.login').click();
    cy.get('#login-dialog').should('be.visible');

    cy.get('#login-dialog a').click();
    cy.get('#registration-dialog').should('be.visible');

    cy.get('input[type="text"]').eq(0).type('John');
    cy.get('input[type="text"]').eq(1).type('Doe');
    cy.get('input[type="email"]').eq(1).type('test2@example.com');
    cy.get('input[type="password"]').eq(1).type('password');

    cy.get('#registration-dialog form').submit();

    cy.get('.logged').should('be.visible');
    cy.get('.logout').should('be.visible');
  });

  it('allows users to log out', () => {
    cy.viewport('macbook-15');
    cy.mount(Profile)
    cy.get('.login').click();
    cy.get('#login-dialog').should('be.visible');

    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password');

    cy.get('#login-dialog form').submit();

    cy.get('.logout').click();
    cy.get('.login').should('be.visible');
  });
});