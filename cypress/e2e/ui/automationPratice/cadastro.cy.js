describe('teste na tela de cadastro', () => {
    
it('teste 01 cadastro com sucesso', () => {
    cy.visit('/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('Abraão de Isac e Jaco')
    cy.get('[data-qa="signup-email"]').type('000123deoliveira4@bmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('[data-qa="password"]').type('123456')
    cy.get('[data-qa="days"]').select('5')
    cy.get('[data-qa="months"]').select('August')
    cy.get('[data-qa="years"]').select('1994')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('[data-qa="first_name"]').type('Abraão')
    cy.get('[data-qa="last_name"]').type('Jaco')
    cy.get('[data-qa="company"]').type( 'Instituto biblia')
    cy.get('[data-qa="address"]').type('Rua Araraquara')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Ceara')
    cy.get('[data-qa="city"]').type('Fortaleza')
    cy.get('[data-qa="zipcode"]').type('60025130')
    cy.get('[data-qa="mobile_number"]').type('85988888888')
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('include','account_created')



    
});

});