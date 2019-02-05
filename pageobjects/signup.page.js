 

var page = require('./page');


var signUpPage = Object.create(page, {
    /**
     * define elements
     */
    firstName  :      { get: function () { return browser.element("//input[@id='firstName']"); } },
    lastName   :      { get: function () { return browser.element("//input[@id='lastName']"); } },
    email:            { get: function () { return browser.element("//input[@id='email']"); } },
    countryNo:        { get: function () { return browser.element("//input[@placeholder='49']"); } },
    mobilePhone:      { get: function () { return browser.element("//input[@placeholder='987654321']"); } },
    password      :   { get: function () { return browser.element("//input[@id='password']"); } },
    passwordRepeat:   { get: function () { return browser.element("//input[@id='passwordConfirmation']"); } },
    tickAccept  :     { get: function () { return browser.element("//label[@class='tos-label']//input[@value='on']"); } },
    signUp:           { get: function () { return browser.element("//button[contains(text(),'Sign up!')]"); } },
    signUpV:          { get: function () { return browser.element('/html[1]/body[1]/div[10]/div[1]/div[1]/div[1]/h4[1]'); } },
    existingUser:     { get: function () { return browser.element('/html[1]/body[1]/div[10]/div[1]/div[1]/div[1]/p[1]'); } },
  open: { value: function() {
        page.open.call(this, 'https://wunderflats.com');  
    } },
    signUpValues: { value: function (firstN,lastN,emailid,pass,repeatPass,phoneNo) {
       if ( typeof firstN == 'string' &&  typeof lastN == 'string'  ) {
        this.firstName.setValue(firstN);
        this.lastName.setValue(lastN);  
        
        }
        else
        {
        console.log("Error : First Name and last name should be string"); 
        return false;
        }
        var re = /\S+@\S+\.\S+/;

        if ( re.test(emailid)){
        browser.pause(2000); 
        this.email.setValue(emailid);
        }else{
        console.log("Email is not Valid"); 
        return false;
        }
        this.countryNo.setValue('+91');
   
        this.mobilePhone.setValue(phoneNo);
      

        if(pass.length > 7){
        this.password.setValue(pass);

        this.passwordRepeat.setValue(repeatPass);

        } else{
         console.log("Error : password length should be minimum 8");
            return false
        }
        this.tickAccept.click();
        browser.pause(2000);
        this.signUp.click();
        browser.pause(12000);
        
    } }, 
});
module.exports = signUpPage