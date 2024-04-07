/// <reference types="cypress"/>

describe("Data driven test suite", () => {
  let value;

  before("before test", () => {
    cy.fixture("dataDrivenTest.json").then((jsonData) => {
      value = jsonData;
    });
  });

  it("Data driven test", () => {
    cy.visit("https://www.google.com/search?q=code+with+zaheer");

    cy.xpath('//*[@class="gLFyf"]').clear();
    cy.xpath('//*[@class="gLFyf"]').type(value.key2);
    cy.get("button[type='submit']").click({ force: true });
  });
});
