describe('Element Selection Practice', () => {
  it('Practices selecting elements', () => {
    // Visit the test website
    cy.visit('https://example.cypress.io')

    // Select by ID and click
    cy.get('#query-btn').click()

    // Select by class and click
    cy.get('.query-list').click()

    // Select by tag and click button containing "Submit"
    cy.get('button').contains('Submit').click()

    // Select by attribute and type into an input
    cy.get('input[placeholder="Email"]').type('test@example.com')

    // Select by text content and click
    cy.contains('Actions').click()

    // Select the first list item inside a list by class
    cy.get('.query-ul').find('li').first().click()

    // Select the third list item in the list
    cy.get('ul.query-ul').find('li').eq(2).click()
  })
})

