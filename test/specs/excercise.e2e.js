
describe('Vintage Hand Bags Shop', () => {

    it('should open main shop page - excercise 1', () => {
        
        browser.url('/shop/');

        browser.pause(5000);
        
    });
    
});


// describe('My Login application', () => {
//     it('should login with valid credentials', () => {
//         LoginPage.open();

//         LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         expect(SecurePage.flashAlert).toBeExisting();
//         expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });