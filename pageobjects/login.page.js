

var page = require('./page');
var hpage = require('./home.page');

var loginPage = Object.create(page, {
    /**
     * define elements
     */
    loginPage:        { get: function () { return browser.element("//div[text()='/']//a[@class='AppHeader-link AppHeader-link--login'][contains(text(),'Log in')]"); } },
    email:            { get: function () { return browser.element("//input[@id='email']"); } },
    password      :   { get: function () { return browser.element("//input[@id='password']"); } },
    login:            { get: function () { return browser.element("//button[contains(text(),'Login')]"); } },
    loginV:           { get: function () { return browser.element("//h4[@class='heading-small heading-small--centered']"); } },

    
    open: { value: function() {
        page.open.call(this, 'https://wunderflats.com');  
     } },
        loginRedirect: { value: function () {
                    browser.pause(6000);
        this.loginPage.click();
    } },
    loginValues: { value: function (emailid,pass) {
             this.email.setValue(emailid);
        this.password.setValue(pass);
        this.login.click();
        console.log("Logged In")
        browser.pause(4000);
    } },  
});

module.exports = loginPage