import Hero from "../components/Hero.svelte";
import Repair from "../components/Repair.svelte";
describe('Modal Window', () => {
  it('should open the modal window when the "Заказать ремонт" button is clicked', () => {
    cy.mount(Hero);

    cy.get('.btn').click();

    cy.get('.modal') // Замените на селектор модального окна
        .should('be.visible');
  });
});

describe('Modal Window', () => {
  it('should close the modal window when the "closeModal" function is called', () => {
    cy.mount(Hero);


    cy.get('.btn').click();

    cy.get('.modal')
        .should('be.visible');

    cy.window().its('closeModal').invoke('call');

    cy.get('.modal')
        .should('not.be.visible');
  });
});

