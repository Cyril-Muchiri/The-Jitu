/// <reference types="Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/calc.html')
    
  })

  it('Passes when all h1 elements are accessed successfully', () => {
    cy.visit('http://127.0.0.1:5500/calc.html')
    cy.get('h1')
  })
  it('Passes when all div elements are accessed successfully', () => {
    cy.visit('http://127.0.0.1:5500/calc.html')
    cy.get('div');
  })

  it('Passes when all form elements can be  accessed successfully', () => {
    cy.visit('http://127.0.0.1:5500/calc.html')
    cy.get('form')
  })
  it('Passes when all button elements are accessed successfully', () => {
    cy.visit('http://127.0.0.1:5500/calc.html')
    cy.get('button')
  })
})