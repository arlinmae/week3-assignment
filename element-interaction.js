describe('Interacting with Elements', () => {
  it('Performs interactions on the Cypress example page', () => {
    // Visit the test website
    cy.visit('https://example.cypress.io')

    // Click a button
    cy.get('#query-btn').click()

    // Enter text into an input field
    cy.get('input[placeholder="Email"]').type('myemail@example.com')

    // Check a checkbox (modify if example page doesn't have this element)
    cy.get('#agreeCheckbox').check()

    // Select an option from a dropdown (modify if example page doesn't have this element)
    cy.get('#countryDropdown').select('Canada')

    // Submit the form (modify if example page doesn't have this element)
    cy.get('#signupForm').submit()
  })
})
