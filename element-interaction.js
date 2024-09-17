describe('Interaction Test: Scrolling, Dropdown Selection, and Range Inputs', () => {
  it('Performs actions like scrolling, selecting from dropdowns, and adjusting ranges', () => {
    // Step 1: Visit the Cypress example page for actions
    cy.visit('https://example.cypress.io/commands/actions')

    // Step 2: Scroll to the "Scroll to bottom" button
    cy.get('#scroll-horizontal button').scrollIntoView().should('be.visible')

    // Step 3: Scroll to a specific element (horizontal scroll)
    cy.get('#scroll-horizontal button').scrollIntoView().click()

    // Step 4: Select a value from a dropdown
    cy.get('.action-select').select('apples').should('have.value', 'fr-apples')

    // Step 5: Adjust a range slider (input type="range")
    cy.get('input[type="range"]').invoke('val', 75).trigger('input')
    cy.get('input[type="range"]').should('have.value', 75)
  })
})
