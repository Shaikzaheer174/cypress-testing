"# cypress-testing"

<!-- to install report -->
- npm i --save-dev cypress-mochawesome-reporter

<!-- To run the cypress particular folder files / for recording video as well-->
npx cypress run --browser chrome --headed --spec "cypress\e2e\reportingTests\*.cy.js"