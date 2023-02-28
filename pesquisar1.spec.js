/// <reference types = "cypress"/>
describe ('realizar pesquisa no google', () => {

    it ('pesquisar Ferrari', () =>{
        cy.visit('https://www.google.com.br/')
        
        cy.get('.gLFyf').type('Ferrari')
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.get(':nth-child(5) > .g > .GLI8Bc > [data-content-feature="2"] > .VwiC3b > span').should('contain','Ferrari')
        });

});