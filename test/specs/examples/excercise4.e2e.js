const { getAllProducts } = require("../../pageobjects/shop.page");

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
        
        const products = $$('.product');
        expect(products.length).toBeGreaterThan(0);
    
        products.forEach((product) => {
            expect(product.$('h3').getText()).toMatch(/[a-zA-Z]{3,}/)
            expect(product.$('h4').getText()).toMatch(/USD[0-9]+.[0-9]+.*/)
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