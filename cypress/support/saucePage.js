Cypress.Commands.add("CC_login", (username, password) => {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
  });
  