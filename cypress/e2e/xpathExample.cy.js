/// <reference types="cypress"/>

describe("cypress xpath suite", () => {
  it("Xpath test", () => {
    cy.visit("https://www.google.com/search?q=code+with+zaheer");
    cy.xpath('//*[@class="gLFyf"]').clear();

    cy.xpath('//*[@class="gLFyf"]').type("javascript");
    cy.xpath('//*[text()="Html"]').click({ force: true });
  });
});
