import Hero from '../../src/components/Hero.svelte';

describe('Hero', () => {
  it('playground', () => {
    cy.mount(Hero);
  });
});

describe('Hero', () => {
  it('playground', () => {
    cy.mount(Hero);
    cy.get('h1').should('have.text', 'Ремонт ПК');
  });
});

describe('Repair Page', () => {
  it('should open modal on button click', () => {
    cy.mount(Hero);
    cy.get('button').click();
    cy.get('.modal').should('be.visible');
  });

  it('should close modal on close button click', () => {
    cy.mount(Hero);
    cy.get('.btn').click();
    cy.get('.modal').should('be.visible');
    cy.get('.modal-close').click();
    cy.get('.modal').should('not.be.visible');
  });

  it('should close modal on background click', () => {
    cy.mount(Hero);
    cy.get('.btn').click();
    cy.get('.modal').should('be.visible');
    cy.get('.modal-background').click();
    cy.get('.modal').should('not.be.visible');
  });
});

