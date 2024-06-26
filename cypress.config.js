const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // to stop auto rerun cypress
  // watchForFileChanges: false,

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    experimentalStudio: true,
  },
});
