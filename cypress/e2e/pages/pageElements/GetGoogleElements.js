/// <reference types="cypress"/>

const myLocators = require("../locators.json");

export default class GoogleElements {
  getGoogleSearchBox() {
    return cy.get(myLocators.G_SearchBox);
  }
}
