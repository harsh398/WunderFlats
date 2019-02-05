

var page = require('./page');
var hpage = require('./home.page');
var loginP = require('./login.page');
var signP = require('./signup.page');
var accountP = require('./account.page.js');
var valuesPage = Object.create(page, {
    /**
     * define elements
     */

        loginI: { value: function () {
         loginP.loginValues('harsh35@live.com','password123')
    } },
 
       signI: { value: function () {
         signP.signUpValues("Harsharan","Deep",'harsh35@live.com','password123','password123','9041430599');
    } },
         signIP: { value: function () {
         signP.signUpValues( "","",'harsh35@live.com','','','9041430599');
    } },

     accountI: { value: function () {
         accountP.profileSetting( "Harsharan","Deep",'harsh35@live.com','','#B31/229 sirhnadi gate','147001','Patiala','Punjab','QA','Freelancer');
    } },
     accountIn: { value: function () {
         accountP.profileSetting("123456","789",'harsh35@live.com','','#B31/22 sirhnadi gate','14700A','Patial','Punja','Q','Freelance');
    } },

});

module.exports =valuesPage