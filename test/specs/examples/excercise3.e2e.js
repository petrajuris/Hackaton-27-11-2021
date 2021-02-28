
describe('Vintage Hand Bags Shop', () => {

    it('should display products on page - excercise 3', () => {
        
        browser.url('/shop/');
        
        const searchField = $('#searchField');
        expect(searchField).toBeDisplayed();
        expect(searchField).toBeEnabled();

        const searchButton = $('.searchButton');
        expect(searchButton).toBeDisplayed();
        expect(searchButton).toBeEnabled();

        const products = $$('.listing-product-name');
        expect(products).toBeElementsArrayOfSize(4);

        products.forEach((product) => {
            expect(product.getText()).toEqual('TODO');
            expect(product).toBeVisible();
        })

        searchField.setValue('Retro');
        browser.pause(5000);
        searchButton.click();

        const serchedProducts = $$('.listing-product-name');
        expect(serchedProducts).toBeElementsArrayOfSize(1);

        serchedProducts.forEach((product) => {
            expect(product).toHaveTextContaining('Retro')
        });
    });
    
});