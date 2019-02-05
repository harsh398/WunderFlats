var expect = require('chai').expect;
var assert = require('chai').assert;
const chai = require('chai')
const chaiHttp = require('chai-http');
var homePage = require('../pageobjects/home.page');
var loginPage = require('../pageobjects/login.page');
var signUpPage = require('../pageobjects/signup.page');
var accountPage = require('../pageobjects/account.page');
var valuePage = require('../pageobjects/values.page');
chai.use(chaiHttp)
describe('Test Suite 2- SignUp ', () => {

    it('Should Open Signup Page and should be able to Signup  ', () => {
        console.log("..................... Suite 2.1. - Sign UP Page Test........................");
        console.log("TC => Sigining Up with new Values");
        console.log("1. Opening HomePage.");
        signUpPage.open();
        assert.equal(browser.getTitle(),"Rent furnished apartments - Wunderflats");
        console.log(browser.getTitle(), "- Browser Title");
        homePage.isloginSignupPresent();
        console.log("2. Opening Sign Up Page");
        homePage.signUpRedirect();
        valuePage.signI();
        console.log("3. User Signed Up");
        accountPage.accountRedirect();
        console.log("4. Logging out ");
        homePage.logoutNew();
        console.log(".....................Test execution finished.......................");

    });

    it('Should Open Signup Page and should not be able to ssignup with blank  Values   ', () => {
        console.log("..................... Suite 2.2. - Sign Up with Blank Values ........................");
        console.log("TC => Negative Test with Blank Values");
        console.log("1. Opening HomePage.");
        signUpPage.open();
        homePage.isloginSignupPresent();
        console.log("2. Opening Sign Up Page");
        homePage.signUpRedirect();
        console.log("3. Entering Blank  Values");
        valuePage.signIP();
        console.log(".....................Test execution finished.......................");

    });



});

     