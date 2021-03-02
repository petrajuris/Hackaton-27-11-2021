
describe('Vintage Hand Bags Shop', () => {

    it('should open main shop page - excercise 1', () => {
        
        browser.url('/shop/');
        
        const windowSize = browser.getWindowSize();
        console.log(windowSize);

        const allCookies = browser.getCookies();
        console.log(allCookies);
        browser.saveScreenshot('shop_main.png');

        browser.pause(5000);
        
    });
    
});