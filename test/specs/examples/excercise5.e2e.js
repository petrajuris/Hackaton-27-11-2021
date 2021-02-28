
const ShopPage = require('../../pageobjects/shop.page');

describe('Vintage Hand Bags Shop', () => {

    beforeEach(() => {
        ShopPage.open();
    });

    it('should show 4 products by default with search enabled', () => {
        expect(ShopPage.searchField).toBeDisplayed();
        expect(ShopPage.searchField).toBeEnabled();
        expect(ShopPage.searchButton).toBeDisplayed();
        expect(ShopPage.searchButton).toBeEnabled();
        expect(ShopPage.products.length).toBe(4);
    });

    it('all products should have name and price', () => {
        
        browser.pause(2000)
        const products = ShopPage.products;
        expect(products.length).toBeGreaterThan(0);
    
        products.forEach((product) => {
            expect(product.name).toMatch(/[a-zA-Z]{3,}/)
            expect(product.price).toMatch(/USD[0-9]+.[0-9]+.*/)
        });
    });


    it('search search in products', () => {

        ShopPage.search('Retro');

        ShopPage.products.forEach((product) => {
            expect(product).toHaveTextContaining('Retro')
        });
    });
    
});