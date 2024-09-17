describe('Password Masking Test', () => {
    it('Verifies that the password input is masked', () => {
      // Step 1: Visit the Cypress example page
      cy.visit('https://example.cypress.io/commands/actions')
  
      // Step 2: Type text into the password field using the id selector
      cy.get('#password1').type('mypassword')
  
      // Step 3: Verify the text is masked by checking the input type is 'password'
      cy.get('#password1').should('have.attr', 'type', 'password')
    })
  })
