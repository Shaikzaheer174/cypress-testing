/// <reference types="cypress"/>

import googleElements from "../pageElements/GetGoogleElements";

export default class GoogleActions {
  constructor() {
    this.googleElements = new googleElements();
  }

  typeIntoGoogleSearchBox() {
    this.googleElements.getGoogleSearchBox();
  }
}
