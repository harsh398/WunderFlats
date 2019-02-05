var expect = require('chai').expect;
var assert = require('chai').assert;
const chai = require('chai')
const chaiHttp = require('chai-http');
var homePage = require('../pageobjects/home.page');
var loginPage = require('../pageobjects/login.page');
var signUpPage = require('../pageobjects/signup.page');
var accountPage = require('../pageobjects/account.page');
chai.use(chaiHttp)
describe('Test Suite 1 ', () => {


    it('Should Open WunderFlats Home Page and Open Sign up/Login Dialogue box  ', () => {
        console.log("..................... Suite 1.  Test Case 1 execution started........................");
        console.log("TC => Navigate to Wunderflats page and switching between login/Signup");
        console.log("1. Opening HomePage.");
        homePage.open();
        assert.equal(browser.getTitle(),"Rent furnished apartments - Wunderflats");
        console.log(browser.getTitle(), "- Browser Title");
        homePage.isloginSignupPresent();
        console.log("2. Opening Login Page");
        homePage.loginRedirect();
        console.log("3. Switching to SIgnup Page");
        homePage.switchSignUp();
        browser.pause(2000);
        console.log("4. Switching back to Login Page");
        homePage.switchLogin();
        console.log(".....................Test execution finished.......................");

    });

  
});
