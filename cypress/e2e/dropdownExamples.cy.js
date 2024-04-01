/// <reference types="cypress" />

describe("dropdown suite", () => {
  it("dropdown tests", () => {
    cy.visit("https://example.cypress.io/commands/actions");

    // cy.get(".action-select").select(1); //index approach

    // cy.get(".action-select").select('bananas'); //visible text


    cy.get(".action-select").select("fr-oranges"); //value 


  });
});
