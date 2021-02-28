
describe('Vintage Hand Bags Shop', () => {

    it('should display products on page - excercise 2', () => {
        
        browser.url('/shop/');
        
        const searchField = $('#searchField');
        console.log('Search field s displayed: ' + searchField.isDisplayed());
        console.log('Search field s enabled: ' + searchField.isEnabled());

        const searchButton = $('.searchButton');
        console.log('Search button s displayed: ' + searchField.isDisplayed());
        console.log('Search button s enabled: ' + searchField.isEnabled());

        const products = $$('.listing-product-name');
        console.log('There are ' + products.length + ' products on the page');

        products.forEach((product) => {
            console.log(product.getText());
        })

        searchField.setValue('Retro');
        browser.pause(5000);
        searchButton.click();
        
        if ($('#featuredItemsContainer').isExisting()) {
            $$('.listing-product-name').forEach((product) => {
                console.log(product.getText());
            });
        } else {
            console.log('There are products on the page');
        }

    });

    it('should display products on page - excercise 2 - selector chaining'), () => {

        $('#featuredItemsContainer').$$('listing-product-name').forEach((product) => {
            console.log(product);
        })

    }
    
});