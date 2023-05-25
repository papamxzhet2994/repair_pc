import Repair from '../../src/components/Repair.svelte';
import Hero from '../../src/components/Hero.svelte';

describe('RepairModal', () => {
  beforeEach(() => {
    cy.mount(Hero); // Монтируем компонент Repair перед каждым тестом
    cy.viewport('macbook-15'); // Устанавливаем размер окна просмотра для тестов
  });

  it('should open modal on button click', () => {
    cy.get('.modal').should('not.be.visible'); // Проверяем, что модальное окно изначально не отображается

    cy.contains('Заказать ремонт').click(); // Находим кнопку "Заказать ремонт" и кликаем по ней

    cy.get('.modal').should('be.visible'); // Проверяем, что модальное окно стало видимым
  });

  it('should close modal on close button click', () => {
    cy.contains('Заказать ремонт').click(); // Открываем модальное окно

    cy.get('.modal').should('be.visible'); // Проверяем, что модальное окно отображается

    cy.get('.close').click(); // Находим кнопку закрытия и кликаем по ней

    cy.get('.modal').should('not.be.visible'); // Проверяем, что модальное окно закрылось
  });

  it('should close modal on form submit', () => {
    cy.contains('Заказать ремонт').click(); // Открываем модальное окно

    cy.get('.modal').should('be.visible'); // Проверяем, что модальное окно отображается

    // Заполняем форму данными
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('textarea[name="problem"]').type('My device is not working properly');

    cy.get('form').submit(); // Отправляем форму

    cy.get('.modal').should('not.be.visible'); // Проверяем, что модальное окно закрылось
  });
});
