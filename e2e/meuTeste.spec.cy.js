
//teste da API DO CLIMA 
/*
describe('Teste da pagina de Clima', () => {
  it('Deve permitir a busca por cidade e localizar e trazer as informações de acordo com cada cidade ', () => {
    cy.visit('http://127.0.0.1:5500/INTERA-O-COM-APIs-Clima/clima/index.html')
  cy.get('input[name="city_name"]').type('Maceio')
   // cy.get('input[name="password"]').type('12345678')
    cy.get('button[type="submit"]').click()

    

    })

  })
    */
  describe('Teste da pagina de Dog', () => {
    it('Deve verificar se os botões estão fucionando de forma correta ', () => {
      cy.visit('http://127.0.0.1:5500/TheDogApi/java/index.html')
    //cy.get('input[name="city_name"]').type('Maceio')
     // cy.get('input[name="password"]').type('12345678')
      cy.get('button[name="buttonVotacao"]').click()
      cy.get('button[name="buttonRaca"]').click()
     // cy.get('button[name="buttonFavoritos"]',{force: true}).click()
      //cy.get('button[name="buttonFav"]').click()
      //cy.get('button[name="like"]').click()
      //cy.get('button[name="deslike"]').click()
     cy.get('button[name="buttonVotacao2"]').click()
      cy.get('button[name="buttonRaca2"]').click()
     // cy.get('button[name="buttonFavoritos2"]').click()
      //cy.get('button[name="buttonVotacao3"]').click()
      cy.get('button[name="buttonRaca3"]').click()
      //cy.get('button[name="buttonFavoritos3"]').click()

      cy.get('select#selectRaca').select(0).should('haver.value','Afghan Hound')
    })

  })