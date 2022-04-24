describe('dock-ui: DockUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dockui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DockUi!');
    });
});
