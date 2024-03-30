const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // to stop auto rerun cypress
  // watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
});
