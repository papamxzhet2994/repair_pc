import Header from "../../src/components/Header.svelte";

describe('Header.cy.js', () => {
  it('playground', () => {
    cy.mount(Header)
  })
})

describe('Profile Modal', () => {
  it('should open the profile modal when the profile button is clicked', () => {
    cy.mount(Header);

    cy.get('.profile').click();

    cy.get('.modal') // Замените на селектор модального окна профиля
        .should('be.visible');
  });
});
