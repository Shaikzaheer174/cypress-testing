class Homepage {
  elements = {
    searchTextBox: () => cy.get("input[id='search']"),
    searchIcon: () => cy.get("#search-icon-legacy > yt-icon"),
  };

  visit() {
    cy.visit("https://www.youtube.com/");
  }

  searchInYoutube() {
    this.elements.searchTextBox().type("javascript by code with harry");
    this.elements.searchIcon().click();
  }
}

// export to return current class object
module.exports = new Homepage();
