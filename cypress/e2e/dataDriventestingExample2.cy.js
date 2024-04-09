/// <reference types="cypress"/>
const JsonData = require("../fixtures/dataDrivenTest2.json");

describe("Data driven test suite 2", () => {
  JsonData.forEach((data) => {
    it("Data driven test 2", () => {
      cy.visit("https://www.google.com/search?q=code+with+zaheer");

      cy.xpath('//*[@class="gLFyf"]').clear();
      cy.xpath('//*[@class="gLFyf"]').type(data.key1);
      cy.get("button[type='submit']").click({ force: true });
    });
  });
});
