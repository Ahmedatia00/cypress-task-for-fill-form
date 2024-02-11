import { formPage } from "../fixtures/locators"


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillForm', (name, mail,phone,subject,Description) => { 
    cy.visit('/')
    cy.get(formPage.name.idLocator).type(name)
    cy.get(formPage.mail.idLocator).type(mail)
    cy.get(formPage.phone.idLocator).type(phone)
    cy.get(formPage.subject.idLocator).type(subject)
    cy.get(formPage.Description.idLocator).type(Description)
    cy.get(formPage.submitButton.idLocator).click()
 })