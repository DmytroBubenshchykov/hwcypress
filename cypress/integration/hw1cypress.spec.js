describe('Sign in for conduit', () => {
    it('', () => {
      cy.visit('https://react-redux.realworld.io/#/login')
      cy.get (':nth-child(1) > .form-control')
        .type('1cypress1@mail.com');
      cy.get (':nth-child(2) > .form-control')
        .type('cypress1');
      cy.get ('.btn')
        .click();
      cy.get('.navbar').contains('cypresstest').should('exist');
    });
});
