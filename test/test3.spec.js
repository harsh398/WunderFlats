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
describe('Test Suite 3- Verifying ', function () {


it('Should Open Account Settings   ', function () {
        console.log("..................... Suite 3.1  Login and Entering Account Settings ........................");
        console.log("TC => Login Test and Changing profile Setting");
        console.log("1. Opening HomePage.");
        accountPage.open(); 
        console.log("2. Opening Login Page");
        homePage.loginRedirect();
        valuePage.loginI();
        console.log("3. User Logged IN");
        accountPage.accountRedirect();
        console.log("4. Opening Account Settings  ");
        valuePage.accountI();
        console.log("5. Account Settings Changed  ");
        accountPage.accountRedirectt();
        console.log(".....................Test execution finished.......................");
    });

it('Verify User settings   ', function () {
        console.log("..................... Suite 3.2  Verifying Account Settings........................");
        console.log("TC => Verifying User Settings");
        accountPage.open();
        console.log("1. Opening HomePage.");
        accountPage.accountRedirect();
        console.log("2. Opening Account Settings  ");
        console.log("3. verifying account Settings  ");
        //To check if the First Name and Last name are only CHaracter and not Numbers
        assert.equal(true ,!/[^a-z]/i.test(accountPage.fName()) , "First name  cant be numbers " );
        assert.equal( accountPage.fName(), 'Harsharan',"First Name is not Equal");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.lName()) , "Last name  cant be numbers " );
        assert.equal( accountPage.lName() , "Deep", "Last Name is not Equal");
        console.log("3.1 First Name and Last Name are equal");
        //Checking if Email Values is Equal
        assert.equal( accountPage.eMail() , "harsh398@live.com", "Email is not Equal ");
        console.log("3.2 Email are equal");
        //Check if Selcted Country matches
        assert.equal( accountPage.phoneNo() , "IN", "Value is not Equal");
        console.log("3.3 Country Value is Correct");
        //Phone no Matches
        assert.equal( accountPage.mPhone() , "9041430599", "Value is not Equal");
        console.log("3.4 Phone no is Correct");
        assert.equal( accountPage.nation() , "IN", "Value is not Equal");
        console.log("3.5 Country Value is Correct");
        //to Check if Date of Birth Matches
        assert.equal( accountPage.dDay() , "01", "Value is not Equal");
        assert.equal( accountPage.mMonth() , "07", "Value is not Equal");
        assert.equal( accountPage.Yyear() , "1995", "Value is not Equal");
        console.log("3.6 DOB is Correct");
        //to check if Address city and zipcode matches 
        assert.equal( accountPage.st() , "#B31/229 sirhnadi gate", "Value is not Equal");
        assert.equal(false ,!/[^a-z]/i.test(accountPage.zip()) , "ZipCode Can't be Characters " );
        assert.equal( accountPage.zip() , "147001", "Value is not Equal");
        console.log("3.7 Address is Correct");
        assert.equal( accountPage.countri() , "IN", "Value is not Equal");
        console.log("3.8 Country Value is Correct");
        assert.equal( accountPage.town() , "Patiala", "Value is not Equal");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.town()) , "city Can't be Numbers " );
        assert.equal( accountPage.states() , "Punjab", "Value is not Equal");
        assert.equal(true ,!/[^a-z]/i.test(accountPage.states()) , "States Can't be Numbers " );
        assert.equal( accountPage.work() , "QA", "Value is not Equal");
        console.log(".....................Test execution finished.......................");

    });

});
