import NavBar from "@/components/header/navBar";

describe("NavBar Component", () => {
  it("render component correctly", () => {
    cy.mount(<NavBar />);
    cy.get('a[href="/"]').should("exist");
  });
});
