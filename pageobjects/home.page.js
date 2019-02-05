 

var page = require('./page');


var homePage = Object.create(page, {
    /**
     * define elements
     */
   loginPage:    { get: function () { return browser.element("//div[text()='/']//a[@class='AppHeader-link AppHeader-link--login'][contains(text(),'Log in')]"); } },
   signUpPage:   { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/header[1]/nav[1]/ul[3]/li[1]/div[1]/a[2]'); } },
   loginSignup:  { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/header[1]/nav[1]/ul[3]/li[1]/div[1]'); } },
   loginSwitch:  { get: function () { return browser.element("//a[@class='Modal-footer-link']"); } },
   signUpSwitch: { get: function () { return browser.element("//a[@class='Modal-footer-link']"); } },
   logout: { get: function () { return browser.element("//li[@class='AppHeaderUserNavigation-listItem']//a[@class='AppHeader-link AppHeader-link--logout'][contains(text(),'Logout')]"); } },
   logN: { get: function () { return browser.element("//label[@class='AppHeaderUserNavigation-toggle font-weight--bold']"); } },
    /**
     * define or overwrite page methods
     */
  open: { value: function() {
        page.open.call(this, 'https://wunderflats.com');  
    } },
    switchLogin: { value: function() {
        this.loginSwitch.click();
    } },
    switchSignUp: { value: function() {
        this.signUpSwitch.click();
    } },
    loginRedirect: { value: function () {
    browser.pause(6000);
        this.loginPage.click();
    } },
    signUpRedirect: { value: function () {
    browser.pause(6000);
        this.signUpPage.click();
    } },
     logoutAccount: { value: function () {
     browser.pause(10000);
        this.logout.click();
    } },
           logoutNew: { value: function () {
    browser.pause(6000);
          this.logN.click();
          browser.pause(2000);
          this.logout.click();
    } },
    isloginSignupPresent: { value: function() {
        if (this.loginSignup.isVisible()){
            return true;
        };
        return false;
    } },    
});

module.exports = homePage
