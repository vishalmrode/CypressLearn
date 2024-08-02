//const { describe } = require("mocha");

describe("Assertions demo",()=>{

    it ('Implicit assrtions',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Should,and are implicit assertions

        cy.url().should('include','orangehrmlive');
        cy.url().should('contain','orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       cy.url().should('include','orangehrmlive.com')
       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       .and('contain','orangehrm')
       .and('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq', "OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')  //Logo  pvisible
        .and('exist')   // logo exist

        cy.get("input[placeholder='Username']").type("Admin") // provide a value into inputbox

        cy.get("input[placeholder='Username']").should('have.value','Admin') //value

    })


})