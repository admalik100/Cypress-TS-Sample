import Homepage from '../support/pages/Homepage';

describe('Validate Product content on Homepage', () => {
  const hp = new Homepage();

  beforeEach('Preconditions', () => {
    cy.waitForProductLoading();
  });
  it('Validate all products have name and price displayed', () => {
    hp.validateProductCardContent();
  });
});
