class ShopPage {

    get searchField() { return $('#searchField') }
    get searchButton() { return $('.searchButton') }

    open() {
        return browser.url('/shop/');
    }

    search(text) {
        this.searchField.setValue(text);
        this.searchButton.click();
    }

    get products() {
        return $$('.product').map((product) => {
            return {
                name: product.$('h3').getText(),
                price: product.$('h4').getText()
            }
        });
    }

}

module.exports = new ShopPage();