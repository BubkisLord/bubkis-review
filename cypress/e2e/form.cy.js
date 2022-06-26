describe('Testing form', () => {

  const name = 'Testing'
  const email = 'testing@testing.com'
  const feedback = 'Test form'

  beforeEach(() => {
    cy.visit('/')
  })

  it('check for validation message for invalid email input', () => {
    cy.get('[type="email"]').type('not_an_email')
    cy.get('[type="submit"]').click()
    cy.get('[type="email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Unfortunately, there is no \'@\' in the email address. Put in an actual email please!')
    })
  })

  it('check for validation message for no email input', () => {
    cy.get('[type="submit"]').click()
    cy.get('[type="email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('You have to fill this bit out.')
    })
  })

  it('check for validation message with email and no feedback', () => {
    cy.get('[type="email"]').type(email)
    cy.get('[type="submit"]').click()
    cy.get('#feedback').then(($input) => {
      expect($input[0].validationMessage).to.eq('You have to fill this bit out.')
    })
  })

  it('submitting feedback should redirect to /success', () => {
    cy.get('#name').type(name)
    cy.get('[type="email"]').type(email)
    cy.get('#feedback').type(feedback)
    cy.get('[type="submit"]').click()
   
    cy.url().should('include', '/success')

  })
})
