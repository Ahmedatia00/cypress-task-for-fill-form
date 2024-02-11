const Data = require("../fixtures/dataDriven.json")
import { formPage } from "../fixtures/locators"


describe('Verify that the user can fill the form ', () => {
  // here we are using for each to make loops in case we have more object of data need to test it 
  Data.forEach((testData)  => {
  it('fill the form correctlly for '+`${testData.Name}` ,() => {
    //You can get the command fillForm  at commands in support folder
    cy.fillForm(
      `${testData.Name}`,
      `${testData.Mail}`,
      `${testData.Phone}`,
      `${testData.Subject}`,
      `${testData.Description}`
    )
    //that it is the assertion by using the text after submit
    cy.get(formPage.thanksText.idLocator).should('have.text',`${testData.submitionText}`)
  })
})
})