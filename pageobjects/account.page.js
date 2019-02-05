 

var page = require('./page');


var accountPage = Object.create(page, {
    /**
     * define elements
     */
    
     account:          { get: function () { return browser.element("//label[@class='AppHeaderUserNavigation-toggle AppHeaderUserNavigation-toggle--transparent font-weight--bold']"); } },
     myAccount:        { get: function () { return browser.element("//ul[@class='AppHeaderUserNavigation-list AppHeaderUserNavigation-list--transparent']//li[1]"); } },
     language:         { get: function () { return browser.element("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[1]/div[1]/span[1]/div[1]/select[1]"); } },
     firstName:        { get: function () { return browser.element("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[2]/div[1]/span[1]/span[1]/input[1]"); } },
     lastName:         { get: function () { return browser.element("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[2]/div[1]/span[2]/span[1]/input[1]"); } },
     countryNo:        { get: function () { return browser.element("//select[@class='CustomPhoneNumberInput-country-select']"); } },
     mobilePhone:      { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[2]/div[2]/span[2]/span[1]/div[1]/div[1]/div[2]/input[1]'); } },
     password      :   { get: function () { return browser.element('/html[1]/body[1]/div[10]/div[1]/div[1]/div[1]/form[2]/div[4]/span[1]/span[1]/input[1]'); } },
     email:            { get: function () { return browser.element("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[2]/div[2]/span[1]/span[1]/input[1]"); } },
     password      :   { get: function () { return browser.element('/html[1]/body[1]/div[10]/div[1]/div[1]/div[1]/form[1]/div[2]/span[1]/span[1]/input[1]'); } },
     nationality:      { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[3]/div[1]/span[1]/div[1]/select[1]'); } },
     dob:              { get: function () { return browser.element("//span[contains(@class,'DateTextInput-inputs')]"); } },
     DD:               { get: function () { return browser.element("//input[@placeholder='DD']"); } },
     MM:               { get: function () { return browser.element("//input[@placeholder='MM']"); } },
     YYYY:             { get: function () { return browser.element("//input[@placeholder='YYYY']"); } },
     streetA:          { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[5]/div[1]/span[1]/span[1]/input[1]'); } },
     zipCode :         { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[5]/div[3]/span[1]/span[1]/input[1]'); } },
     country :         { get: function () { return browser.element("//select[@name='address[country]']"); } },
     city :            { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[5]/div[3]/span[2]/span[1]/input[1]'); } },
     state :           { get: function () { return browser.element('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/fieldset[5]/div[4]/span[1]/span[1]/input[1]'); } },
     job :             { get: function () { return browser.element("//input[@id='jobTitle']"); } },
     company :         { get: function () { return browser.element("//input[@id='companyName']"); } },
     save :            { get: function () { return browser.element("//button[@type='submit']"); } },
     noValuef :        { get: function () { return browser.element("//span[@class='ErrorIndicator-message ErrorIndicator-message--error'] "); } },
     noValuel :        { get: function () { return browser.element("//div[@class='UserProfileForm-twoColumns']//span[2]//span[2] "); } },
     
     accountsec:          { get: function () { return browser.element("//label[@class='AppHeaderUserNavigation-toggle font-weight--bold']"); } },
    /**
     * define or overwrite page methods
     */

     // Open Function to Open the Url
  open: { value: function() {
        page.open.call(this, 'https://wunderflats.com');  
browser.pause(10000);
    } },

    // Account Redirect will Open Account Settings
    accountRedirect: { value: function () {
         browser.pause(15000);
        this.account.click();
        browser.pause(2000);
        this.myAccount.click();
                browser.pause(2000);
    } },
    // This Will change the Profile Settings
    profileSetting: { value: function (firstN,lastN,emailid,mobile,streetAd,zip,cityA,stat,jobP,compan) {
         
        this.countryNo.selectByIndex(1);
        this.firstName.setValue(firstN);
        this.lastName.setValue(lastN);
        this.email.setValue(emailid);
        this.countryNo.selectByIndex(93);
        this.mobilePhone.setValue(mobile);
        this.nationality.selectByIndex(102);
        this.dob.click();
        this.DD.setValue('01');
        this.MM.setValue('07');
        this.YYYY.setValue('1995');
        this.streetA.setValue(streetAd);
        this.zipCode.setValue(zip);
        this.city.setValue(cityA);
        this.state.setValue(stat);
        this.country.selectByIndex(102);
        this.job.setValue(jobP);
        this.company.setValue(compan);
        this.save.click();
    } },

 // Assertion Functions given below
 accountRedirectt: { value: function () {

        this.accountsec.click();
    }},
 st: { value: function () {

       return this.streetA.getAttribute('value');
    }},
    zip: { value: function () {

       return this.zipCode.getAttribute('value');
    }},
    town: { value: function () {

       return this.city.getAttribute('value');
    }},
    states: { value: function () {

       return this.state.getAttribute('value');
    }},countri: { value: function () {

       return this.country.getAttribute('value');
    }},
    work: { value: function () {

       return this.job.getAttribute('value');
    }},
    dDay: { value: function () {

       return this.DD.getAttribute('value');
    }},
    mMonth: { value: function () {

       return this.MM.getAttribute('value');
    }},
    Yyear: { value: function () {

       return this.YYYY.getAttribute('value');
    }},
    nation: { value: function () {

       return this.nationality.getAttribute('value');
    }},
    mPhone: { value: function () {

       return this.mobilePhone.getAttribute('value');
    }},
    fName: { value: function () {

       return this.firstName.getAttribute('value');
    }},
     eMail: { value: function () {

       return this.email.getAttribute('value');
    }},
     phoneNo: { value: function () {

       return this.countryNo.getAttribute('value');
    }},
      lName: { value: function () {

      return this.lastName.getAttribute('value');
    }},
});

module.exports = accountPage