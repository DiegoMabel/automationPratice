describe('teste na tela de login', () => {
    it('teste01 de login com sucesso', () => {

        cy.visit('/login')
        cy.login(Cypress.env('usuario01'), Cypress.env('senha'))
        cy.get('b').should('be.visible').should('have.text','Abraão de Isac e Jaco')
        
    });

    
    
})