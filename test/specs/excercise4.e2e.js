
describe('Vintage Hand Bags Shop', () => {

    beforeEach(() => {
        browser.url('/shop/');
    });

    it('should show 4 products by default with search enabled', () => {
        
        const searchField = $('#searchField');
        expect(searchField).toBeDisplayed();
        expect(searchField).toBeEnabled();

        const searchButton = $('.searchButton');
        expect(searchButton).toBeDisplayed();
        expect(searchButton).toBeEnabled();

        const products = $$('.listing-product-name');
        expect(products).toBeElementsArrayOfSize(4);
    });

    it('all products should have name and price', () => {
        
        browser.pause(5000);
        const products = $$('.listing-product-name');
        expect(products.length).toBeGreaterThan(0);
    
        products.forEach((product) => {
            expect(product.getText()).toEqual('TODO');
            expect(product).toBeVisible();
        });
    });


    it('search search in products', () => {

        const searchField = $('#searchField');
        searchField.setValue('Retro');

        const searchButton = $('.searchButton');
        searchButton.click();

        const products = $$('.listing-product-name');
        products.forEach((product) => {
            expect(product).toHaveTextContaining('Retro')
        });
    });
    
});