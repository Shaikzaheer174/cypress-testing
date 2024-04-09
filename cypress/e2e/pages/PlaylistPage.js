class PlaylistPage {
  elements = {
    playlistTitle: () =>
      cy.get("#header-description > h3 > yt-formatted-string > a"),
  };
}

// export to return current class object
module.exports = new PlaylistPage();
