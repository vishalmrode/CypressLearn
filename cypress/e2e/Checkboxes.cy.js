/// <reference types="Cypress"/>

describe('Handle check box',()=>{

    it('Verify the check box is selcted',()=>{

    cy.visit('https://testautomationpractice.blogspot.com/')

    // Check the elements are visible
    cy.get('#sunday').should('be.visible')

    //Selecting single check box - monday
    cy.get("#sunday").check().should('be.checked')

     //Unselecting checkbox
    cy.get("#sunday").uncheck().should('not.be.checked')

    //Selecting all the check boxes
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    //select first and last checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')    

    })

})