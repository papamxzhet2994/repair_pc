import Review from "../../src/components/Review.svelte";

describe('Reviews Page', () => {
    it('should display reviews', () => {
        cy.mount(Review);  
      cy.get('.review-card').should('have.length', reviews.length);
    });
  
    it('should navigate to next testimonial', () => {
        cy.mount(Review);
      cy.get('.slide-right').click();
      cy.get('.review-card').eq(1).should('be.visible');
    });
  
    it('should navigate to previous testimonial', () => {
      cy.mount(Review);
      cy.get('.slide-left').click();
      cy.get('.review-card').eq(reviews.length - 1).should('be.visible');
    });
    
    
  });