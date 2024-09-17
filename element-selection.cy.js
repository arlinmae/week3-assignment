describe('Element Selection Practice on example.cypress.io', () => {
  it('Practices selecting and interacting with various elements', () => {
    // Step 1: Visit the Cypress example page
    cy.visit('https://example.cypress.io/commands/actions')

    // Step 2: Click the submit button using the type and text selector
    cy.get('button[type="submit"]').contains('Submit').click()

    // Step 3: Type into an input field (e.g., email)
    cy.get('.action-email').type('test@example.com').should('have.value', 'test@example.com')

    // Step 4: Check checkboxes that are not disabled
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')

    // Step 5: Force check a disabled checkbox
    cy.get('.action-checkboxes [disabled]').check({ force: true })
    cy.get('.action-checkboxes [disabled]').should('be.checked')

    // Step 6: Select a radio button that is not disabled
    cy.get('.action-radios [type="radio"]').not('[disabled]').check()
    cy.get('.action-radios [type="radio"]').not('[disabled]').should('be.checked')

    // Step 7: Force check a disabled radio button
    cy.get('.action-radios [type="radio"]').check('radio3', { force: true })
    cy.get('.action-radios [type="radio"]').should('be.checked')

    // Step 8: Check multiple checkboxes
    cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])
    cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked')

    // Step 9: Interact with the form: type, verify, clear, verify again
    cy.get('.action-clear').type('Clear this text')
    cy.get('.action-clear').should('have.value', 'Clear this text')
    cy.get('.action-clear').clear()
    cy.get('.action-clear').should('have.value', '')
  })
})

