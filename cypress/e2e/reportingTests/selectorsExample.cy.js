/// <reference types="cypress"/>

describe("cypress selectors suite", () => {
  it("selectors tests", () => {
    cy.visit("https://www.google.com/search?q=code+with+zaheer");

    cy.get('textarea[class="gLFyf"]').then((element) => {
      cy.log("text from google using class : " + element.text());
    });

    cy.get("#APjFqb").then((element) => {
      cy.log("text from google using id : " + element.text());
    });

    // cy.get(".IUOThf > div > a").first().click();
    // cy.get(".IUOThf > div > a").last().click();
    cy.get(".IUOThf > div > a").eq(1).click();

    cy.get("button[type='submit']").click();

    // starts with
    cy.get("button[type^='sub']").click();

    // ends with
    cy.get('button[type$="mit"]').click();

    // contains approach
    cy.get('button[type*="bmi"]').click();

    // contains
    cy.get("a > div").contains("code with zaheer").click();
  });

  it("using tag - click the videos label", () => {
    cy.visit("https://www.youtube.com/@codewithzaheer8006");
    cy.get("yt-tab-shape > div[class='yt-tab-shape-wiz__tab']").first().click();
  });
});
