class Homepage {
  productCard: string;
  product: string;
  productCardImage: string;
  productCardName: string;
  productCarPrice: string;
  constructor() {
    this.productCard = '.products';
    this.product = '.product';
    this.productCardImage = '.product-image';
    this.productCardName = '.product-name';
    this.productCarPrice = '.product-price';
  }

  validateProductCardContent(): void {
    cy.get(this.productCard)
      .should('be.visible')
      .children()
      .should('be.visible')
      .each(() => {
        cy.get(this.productCardImage).should('be.visible');
        cy.get(this.productCardName)
          .should('be.visible')
          .and('have.a.property', 'text');
        cy.get(this.productCarPrice)
          .should('be.visible')
          .and('have.a.property', 'text');
      });
  }
}
export default Homepage;
