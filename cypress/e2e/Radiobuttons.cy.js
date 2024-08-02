/// <reference types="Cypress"/>

describe('Handle Radio box',()=>{

    it('Verify the radio button is selcted',()=>{

    cy.visit('https://testautomationpractice.blogspot.com/')

    // Check the elements are visible
    cy.get('#male').should('be.visible')
    cy.get('#female').should('be.visible')

    // Slecting the element
    
    cy.get('#male').check().should('be.checked')
    cy.get('#female').should('not.be.checked')

    // cy.get('#female').check().should('be.checked')
    // cy.get('#male').should('not.be.checked')

    })

})