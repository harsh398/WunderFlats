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
describe('Test Suite 4 - Negative Test ', function () {


it('Should Open Account Settings   ', function () {
        console.log("..................... Suite 4.1  Login and Entering Invalid Values ........................");
        console.log("TC => Logining in and Opening account settings");
        console.log("1. Opening HomePage.");
        accountPage.open(); 
        console.log("2. Opening Login Page");
        homePage.loginRedirect();
        valuePage.loginI();
        console.log("3. User Logged IN");
        accountPage.accountRedirect();
        console.log("4. Opening Account Settings  ");
        valuePage.accountIn();
        console.log("5. Account Settings Changed  ");
                accountPage.accountRedirectt();
        console.log("6. Logging out ");
        homePage.logoutAccount();
        console.log(".....................Test execution finished.......................");
    });

it('Should  Fail as Entering Invalid values    ', function () {
        console.log("..................... Suite 4.2  Verifying Invalid Values........................");
        console.log("TC => Negative Test ");
        accountPage.open();
        console.log("1. Opening HomePage.");
        homePage.loginRedirect();
        valuePage.loginI();
        console.log("3. User Logged IN");
        accountPage.accountRedirect();
        console.log("2. Opening Account Settings  ");
        console.log("3. verifying account Settings  ");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.fName()) , " Error: First name  cant be numbers " );
        assert.equal( accountPage.fName(), 'Harsharan'," Error: First Name is not Equal");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.lName()) , " Error: Last name  cant be numbers " );
        assert.equal( accountPage.lName() , "Deep", " Error: Last Name is not Equal");
        console.log("3.1 First Name and Last Name are equal");
        assert.equal( accountPage.eMail() , "harsh35@live.com", " Error: Email is not Equal ");
        console.log("3.2 Email are equal");
        assert.equal( accountPage.phoneNo() , "IN", " Error: Value is not Equal");
        console.log("3.3 Country Value is Correct");
        assert.equal( accountPage.mPhone() , "9041430599", " Error: Value is not Equal");
        console.log("3.4 Phone no is Correct");
        assert.equal( accountPage.nation() , "IN", " Error: Value is not Equal");
        console.log("3.5 Country Value is Correct");
        assert.equal( accountPage.dDay() , "01", " Error: Value is not Equal");
        assert.equal( accountPage.mMonth() , "07", " Error: Value is not Equal");
        assert.equal( accountPage.Yyear() , "1995", " Error: Value is not Equal");
        console.log("3.6 DOB is Correct");
        assert.equal( accountPage.st() , "#B31/229 sirhnadi gate", " Error: Value is not Equal");
        assert.equal(false ,!/[^a-z]/i.test(accountPage.zip()) , " Error: ZipCode Can't be Characters " );
        assert.equal( accountPage.zip() , "147001", " Error: Value is not Equal");
        console.log("3.7 Address is Correct");
        assert.equal( accountPage.countri() , "IN", " Error: Value is not Equal");
        console.log("3.8 Country Value is Correct");
        assert.equal( accountPage.town() , "Patiala", " Error: Value is not Equal");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.town()) , " Error: City Name Can't be Numberss " );
        assert.equal( accountPage.states() , "Punjab", " Error: Value is not Equal");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.states()) , " Error: States Can't be Numbers " );
        assert.equal( accountPage.work() , "QA", " Error: Value is not Equal");
        console.log(".....................Test execution finished.......................");
  

    });



});
