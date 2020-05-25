// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

describe('Login de FB', () => {
  beforeEach(() => {
    cy.visit('https://www.fb.com/login');
  });

  it('Login Correcto - con Funcion', () => {
    logeandoFB('correcto@hotmail.com', 'asdadasd');
    cy.get('.byvelhso > :nth-child(5) > :nth-child(1) > .oajrlxb2');
  });

  it('Login incorrecto - con Funcion', () => {
    logeandoFB('asdasdasdasdasdasasdasdasdsadasdasdsadasdasdasdasdadsaaasdasdasdasasdasa@hotmail.com', 'xxqsaxa.6F');
    cy.get('._4rbf').contains('El correo electrónico o el número de teléfono que has introducido no coinciden con ninguna cuenta.');
  });

  it('Login Correcto - SIN Funcion', () => {
    cy.get('#email').type('email@asd.com');
    cy.get('#pass').type('asdasd');
    cy.get('#loginbutton').click();
    cy.get('.byvelhso > :nth-child(5) > :nth-child(1) > .oajrlxb2');
  });

  it('Usuario incorrecto - SIN Funcion', () => {
    cy.get('#email').type('sdasdas');
    cy.get('#pass').type('asdasdas');
    cy.get('#loginbutton').click();
    cy.get('._4rbf').contains('El correo electrónico o el número de teléfono que has introducido no coinciden con ninguna cuenta.');
  });
});

function logeandoFB(email, password) {
  cy.get('#email').type(email);
  cy.get('#pass').type(password);
  cy.get('#loginbutton').click();
}
