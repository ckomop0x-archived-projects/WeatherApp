context('Actions', () => {
  it('should open main page', () => {
    cy.log('Navigate to main page')
    cy.visit('http://localhost:9101')

    cy.log('Check the text of h1 to match')
    cy.get('h1')
      .should('contain', 'Weather Around the World')
  })
})
