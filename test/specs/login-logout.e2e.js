describe('Three foxes Login Page', () => {
    it('should open login page + login', () => {
        browser.reloadSession();
        browser.url('http://czechitas-datestovani-hackathon.cz/en/login?back=my-account');
        //email
        const emailField = $('#email');
        expect(emailField).toBeDisplayed();
        expect(emailField).toBeEnabled();
        //password
        const passwordField = $('#passwd');
        expect(passwordField).toBeDisplayed();
        expect(passwordField).toBeEnabled();
        const button = $('#SubmitLogin');
        expect(button.getText()).toEqual('Sign in');
        emailField.setValue('avybenjmincox@gmail.com');
        passwordField.setValue('jsmenejlepsi5');
        button.click();
        browser.pause(5000);
        const userProfileButton = $('#user_info_acc')
        expect(userProfileButton.getText()).toEqual('Ester');

        browser.pause(5000);
        $('#user_info_acc').click();
        browser.pause(2000);
        $('=Logout').click();
        const logout = $('#user_info_acc')
       expect(logout.getText()).toEqual('Sign in');
    });
   
});