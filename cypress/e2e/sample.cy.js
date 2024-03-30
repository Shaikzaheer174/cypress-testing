/// <reference types="cypress" />

describe("visit my youtube channel", () => {
  it("should visit my youtube channel", () => {
    cy.log("visiting the youtube");
    cy.visit("https://www.youtube.com/");

    cy.get('input[id="search"]').type("code with zaheer", { delay: 100 });

    cy.log("searched my youtube channel");
    cy.get('button[id="search-icon-legacy"] > yt-icon').click();
  });
});
