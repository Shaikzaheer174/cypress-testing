/// <reference types="cypress" />

import GetGoogleElements from "./pages/pageElements/GetGoogleElements";
import GoogleActions from "./pages/pageActions/GoogleActions";

const getGoogleElements = new GetGoogleElements();
const googleActions = new GoogleActions();

describe("visit my page suite", () => {
  it("should visit my page", () => {
    cy.visit("https://www.google.com/");
    cy.get("textarea[class='gLFyf']").type("code with zaheer{enter}");
    cy.get("h3[class='LC20lb MBeuO DKV0Md']")
      .contains("code with zaheer")
      .click();
  });
});
