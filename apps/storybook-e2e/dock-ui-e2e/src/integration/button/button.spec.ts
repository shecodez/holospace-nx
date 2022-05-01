describe('dock-ui: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputs-buttons-button--primary'));

  it('should render the component', () => {
    cy.get('[data-testid=dui-btn]').should('contain', 'Button');
  });
});
