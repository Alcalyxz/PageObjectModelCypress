import homeSaucePage from "../pages/saucedemo/homeSaucePage";
import inventorySaucePage from "../pages/saucedemo/inventorySaucePage";

describe("POM Implementation", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Should login with correct dates from POM", () => {
    homeSaucePage.loginUser("standard_user", "secret_sauce");
    cy.url().should("contain", "/inventory.html");
  });

  it("Should login with correct dates from Custom Commands", () => {
    cy.CC_login("standard_user", "secret_sauce");
    cy.url().should("contain", "/inventory.html");
  });
});
