/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://demo.guru99.com/V1/index.php')
  })


  it('.type() - type into a DOM element', () => {
    cy.get('input[name="uid"]')
      .type('mngr483450').should('have.value', 'mngr483450')

     cy.get('input[name="password"]')
      .type("dyzUqYd")
        .should('have.value','dyzUqYd')

     cy.get('input[name="btnLogin"]').click()   

  })
})
