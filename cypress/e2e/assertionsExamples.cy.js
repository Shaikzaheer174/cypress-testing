/// <reference types="cypress" />

describe("Cypress assertion examples suite", () => {
  it("cypress aeertions tests", () => {
    cy.visit("https://www.google.com/search?q=code+with+zaheer");

    cy.get('textarea[class="gLFyf"]').then((element) => {
      expect(element.text()).to.equal("code with zaheer");
    });

    cy.get('textarea[class="gLFyf"]').should("have.text", "code with zaheer");

    cy.get('textarea[class="gLFyf"]').should("contain", "code with zaheer");

    cy.get('textarea[class="gLFyf"]').should("be.visible");

    cy.get('textarea[class="gLFyf"]').should("have.html", "code with zaheer");

    cy.get('textarea[class="gLFyf"]')
      .should("have.html", "code with zaheer")
      .and("have.attr", "value");

    cy.get('textarea[class="gLFyf"]')
      .should("have.html", "code with zaheer")
      .and("have.attr", "value")
      .and("include", "code with zaheer");

    cy.get('textarea[class="gLFyf"]').then((element) => {
      expect(element.text()).to.have.length(16);
    });
  });
});
