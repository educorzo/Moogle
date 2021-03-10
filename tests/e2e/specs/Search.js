describe('Basic search', () => {
  it('returns artists, albums and tracks', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=Metallica&type=album,artist,track',
      headers: {
        Authorization: 'Bearer ABC'
      }
    },
    { fixture: 'spotifyResponse.json' }
    )

    cy.visit('http://localhost:8080/#access_token=ABC')
    cy.get('input').type('Metallica{enter}')

    cy.get('.card').should('have.length', 3)
    cy.get('.card').contains('Metallica') // A band
    cy.get('.card').contains('Garage Inc.') // A song
    cy.get('.card').contains('Nothing Else Matt') // A track
  })
})
