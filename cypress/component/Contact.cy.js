import Contact from "../../src/components/Contact.svelte";

describe('Contact.cy.js', () => {
  it('playground', () => {
    cy.mount(Contact)
    cy.viewport('macbook-15')
  })
})

describe("Contact Form", () => {
  beforeEach(() => {
    cy.mount(Contact)
    cy.viewport('macbook-15')
  });

  it("displays the form correctly", () => {
    cy.mount(Contact)
    cy.viewport('macbook-15')
    cy.get("#name").should("be.visible");
    cy.get("#phone").should("be.visible");
    cy.get("#service").should("be.visible");
    cy.get(".btn").should("be.visible");
  });

  it("requires all fields to be filled", () => {
    cy.mount(Contact)
    cy.viewport('macbook-15')
    cy.get(".btn").click();
    cy.get(".swal2-icon").should("exist");
    cy.get(".swal2-title").should("contain", "Ошибка");
    cy.get(".swal2-content").should("contain", "Пожалуйста, заполните все обязательные поля");
  });

  it("submits the form successfully", () => {
    cy.mount(Contact)
    cy.viewport('macbook-15')
    const name = "Ivan Ivanov";
    const phone = "1234567890";
    const service = "diagnostic";

    cy.get("#name").type(name);
    cy.get("#phone").type(phone);
    cy.get("#service").select(service);
    cy.get(".btn").click();

    cy.intercept("POST", "/servicesOrder").as("submitForm");

    cy.wait("@submitForm").then((xhr) => {
      cy.mount(Contact)
      cy.viewport('macbook-15')
      expect(xhr.response.statusCode).to.equal(200);
    });

    cy.get(".swal2-icon").should("exist");
    cy.get(".swal2-title").should("contain", "Успешно");
    cy.get(".swal2-content").should("contain", "Мы рассмотрим вашу заявку в скором времени!");

    cy.get("#name").should("have.value", "");
    cy.get("#phone").should("have.value", "");
    cy.get("#service").should("have.value", "");
  });
});
