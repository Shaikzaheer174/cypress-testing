class ResultPage {
  elements = {
    playlist: () =>
      cy.get("[title='JavaScript Tutorials for Beginners in Hindi']"),
  };

  goToplayList() {
    this.elements.playlist().click();
  }
}

// export to return current class object
module.exports = new ResultPage();
