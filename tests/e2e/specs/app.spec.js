describe('App', () => {
    beforeEach(() => {
        cy.visit('/', () => {
            console.log("App loaded");
        })
    })
  
  it('Should have populated select', () => {
    const filmSelectOptions = cy.get('#film_select option');
    filmSelectOptions.should('have.length', 21);
  })

  it("Should show selected film on select change", () => {
      cy.get('#film_select').select('Porco Rosso')
      cy.get('#filmDetail > h3').contains('Porco Rosso')
  })

  it('should add film to favourites on button click', () => {
      cy.get('#film_select').select('Porco Rosso')
      cy.get('button').click()
      cy.get('li').contains('Porco Rosso')
  })

})