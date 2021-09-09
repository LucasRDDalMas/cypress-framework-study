describe('Vue App  Comment', () => {

  const name = "Lucas"
  const category = "EDM"
  const messageOne = "Saudades do que nunca vivemos"
  const messageTwo = "Saudades do que nunca vivemos S2"
  const messageThree = "Saudades do que viveremos"

  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Usuário realizando um comentários', () => {
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageOne)

    cy.contains('Comentar').click()

    cy.get('.list-group-item').should('have.length', 1)
  })

  it('Usuário realizando dois comentários', () => {
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageOne)

    cy.contains('Comentar').click()

    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageTwo)

    cy.contains('Comentar').click()

    cy.get('.list-group-item').should('have.length', 2)
  })

  it('Usuário realizando três comentários e deletando o do meio', () => {
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageOne)

    cy.contains('Comentar').click()

    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageTwo)

    cy.contains('Comentar').click()

    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageThree)

    cy.contains('Comentar').click()

    cy.get('a.btn.btn-danger')
      .should('have.length', 3)
      .first().click()

    cy.get('.list-group-item').should('have.length', 2)
  })

  it('Usuário realizando três comentários e deletando todos', () => {
    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageOne)

    cy.contains('Comentar').click()

    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageTwo)

    cy.contains('Comentar').click()

    cy.get('input[name="name"]').type(name)
    cy.get('input[name="category"]').type(category)
    cy.get('textarea[name="message"]').type(messageThree)

    cy.contains('Comentar').click()

    cy.get('.btn.btn-danger')
      .should('have.length', 3)
      .each(($li, index, $lis) => {
        cy.wrap($lis[0]).click()
      })

    cy.get('.list-group-item').should('have.length', 0)
  })

});
