/// <reference types="cypress"/>
import homepage from "./pages/Homepage";
import resultPage from "./pages/ResultPage";
import playlistPage from "./pages/PlaylistPage";

describe("page object test suite", () => {
  it("page object tests", () => {
    //open youtube
    homepage.visit();

    // search in youtube
    homepage.searchInYoutube();

    // go to playlist
    resultPage.goToplayList();

    //validate playlist title
    playlistPage.elements
      .playlistTitle()
      .should("have.text", "JavaScript Tutorials for Beginners in Hindi");
  });
});
