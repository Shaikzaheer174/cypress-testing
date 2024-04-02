/// <reference types="cypress" />

describe("scroll test suite", () => {
  it("scroll test case", () => {
    cy.visit("www.w3schools.com/js/");
    // cy.wait(5000);
    cy.contains("JavaScript Quiz Test").scrollIntoView().should("be.visible");
  });
});
