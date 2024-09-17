describe('Interacting with Elements', () => {
  it('Performs interactions with buttons, inputs, and forms', () => {
    // Visit the test website
    cy.visit('https://example.com')

    // Click a button
    cy.get('#submitButton').click()

    // Enter text into an input field
    cy.get('input[placeholder="Email"]').type('myemail@example.com')

    // Check a checkbox
    cy.get('#agreeCheckbox').check()

    // Select an option from a dropdown
    cy.get('#countryDropdown').select('Canada')

    // Submit the form
    cy.get('#signupForm').submit()
  })
})
