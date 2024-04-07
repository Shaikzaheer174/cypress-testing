/// <reference types="cypress" />

before("Running before all tests", () => {
  cy.log("Running before all tests");
});

after("Running after all tests,", () => {
  cy.log("Running after all tests");
});

beforeEach("Running before each tests", () => {
  cy.visit("https://www.google.com/search?q=code+with+zaheer");
});

afterEach("Running after each tests", () => {
  cy.log("Running after each tests");
});

describe("cypress Hooks suite", () => {
  it("Hooks test 1", () => {
    cy.get('textarea[class="gLFyf"]').then((element) => {
      cy.log("text from google using class : " + element.text());
    });

    cy.get("#APjFqb").then((element) => {
      cy.log("text from google using id : " + element.text());
    });
  });

  it("Hooks test 2", () => {
    cy.get('textarea[class="gLFyf"]').then((element) => {
      cy.log("text from google using class : " + element.text());
    });

    cy.get("#APjFqb").then((element) => {
      cy.log("text from google using id : " + element.text());
    });
  });
});
