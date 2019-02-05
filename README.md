************************************************************************************************
##### Application :
Wunder Flats -- Login Profile Setting Test

************************************************************************************************

Open e2e Folder 


************************************************************************************************
#### Description:
This is a E2E Test performed on WunderFlats Login/Signup/Profile Setting. 

************************************************************************************************
#### Browser Used ====== Chrome 


************************************************************************************************


## Application Parts : 

### 1.HomePage :
Where you can choose to login if you are existing user or sign up if you wish to create a new account

### 2.Login: 
this is where to choose to login and see your account

### 3.SignUp: 
this is where to choose to Signup for new account

************************************************************************************************
## Test Plan


************************************************************************************************

### Scope
The Test plan consists of test scenarios that will cover functional or User-based testing which means tests are written to simulate user actions on Budgeting Sample Application. Unit testing is Out of Scope.

************************************************************************************************
###  Stack
Node -- Selenium Standlone Service -- WebDriver IO -- Mocha -- Chai -- Allure -- Dot --ChromeDriver -- Allure CommandLine


************************************************************************************************

### Test Scenarios 


##### Home Page : ********************** Passed  **********************
    
1.      Navigate to Home page
2.      Open Login Dialougue Box
3.      Switch to Signup
4.      then back to Login

##### Signup  : ********************** Passed  **********************
    
1.      Navigate to Home page
2.      Open Signup Page
3.      Enter Required Fields and click on signup
4.      Logout

##### Signup with Blank Values  : ********************** Should Fail  **********************
    
1.      Navigate to Home page
2.      Open Signup Page
3.      Enter Required Fields with Blank  and click on signup
4.      Error : Password should be  minimum 8 characters long but it accepts three 
5.      Error : FirstName and LastName should not be accepting Numbers

##### Login and Verifying Profile : ********************** Passed  **********************
    
1.      Navigate to Home page
2.      Open Login Page
3.      Enter Required Fields with Blank  and click on Login
4.      Redirect to My profile and Profile account
5.       Enter New Settings
6.      Verify the new Entered Settings(Using Assert)
7.      Error : FirstName and LastName should not be accepting Numbers
8.      Error : ZIpcode should not be accepting Characters
9.      Error : City and state should not be accepting Numbers

##### Login and Verifying Profile with INvalid Values : ********************** Passed  **********************
    
1.      Navigate to Home page
2.      Open Login Page
3.      Enter Required Fields with Blank  and click on Login
4.      Redirect to My profile and Profile account
5.       Enter New Settings
6.      Verify the new Entered Settings(Using Assert)
7.      Error : FirstName and LastName should not be accepting Numbers
8.      Error : ZIpcode should not be accepting Characters
9.      Error : City and state should not be accepting Numbers

************************************************************************************************

#### Failed Test Scenarios

1. Already a Existing Member
If a user is a Existing member then the Test will fail 

2. Sigining up with Blank Values
If the user enters blank values or Invalid values the test will fail

3. If the Profile Settings doesn't match with New settings
if the new entered settings doesnt match with new settings then the test will fail

4. Entering Invalid Values
user will enter invalid values intentionally so the test will fail


************************************************************************************************
### Page Object Design Pattern
 A Page Object simply models these as objects within the test code. 

************************************************************************************************
 page object files
#### account.page.js - Profile Setting and Verification test File
#### page.js - Base File for Url Redirection
#### home.page.js - First test to open Home page 
#### login.page.js -  User Login Test File
#### signUp.page.js - Signup User test File
#### values.page.js - Input values Test Files

************************************************************************************************

Test Files
#### test1.spec.js
#### test2.spec.js
#### test3.spec.js
#### test4.spec.js
************************************************************************************************

Error ScreenShots
#### Under errorshot Folder

************************************************************************************************

Reports
#### Under allure-reports Folder
#### index.html File
#### Open with FireFox/IE /Edge / Safari -Chrome not supported Yet

************************************************************************************************

##### Installation and Running 
 1. Clone the reposotiry to your local machine. (e2e Folder)
 2. Install Node (https://nodejs.org/en/)
 3. Start the command line interface and Open the Cloned directory in the command line 
    
    Input Values: If you want to Change the Input values Please Change Them at :
    PageObjects/Values.page.js 

 4. Run ************ npm install**************** 
 5. Run ************ npm run test*************** 
 

************************************************************************************************

##### Report generation
1. type npx allure generate under Command Line
3. Allure-reports and Allure-results Folders would be Generated .
4. Open Allure-Reports Folder and Open index.html file in Internet Explorer or FireFox (chrome not Supported Yet)
  

************************************************************************************************
