QA TASK - automated tests

Author: Karolina Radovská
Tested app: https://test-stfu-applifting.herokuapp.com/
Test tool: Cypress
Installation notes: Copying the .js files to your cypress/integration folder should be enough.
Attached files: 
    - readme.txt
    - TS1-score.js
    - TS2-teamname.js

TS1-score.js
    TC1 - score matches clickcount
        Purpose:
            To find out if team score matches the number of times that the button has been actualy clicked.
        Steps:
            1. opens the url "click for team" (see variable "testedApp")
            2. checks if the button is visible
            3. gets an old teamscore
            4. clicks the button x times (where x is adjustable - see variable "clicks")
            5. gets the new teamscore and compare it to the old teamscore
        Note:
            1. The test may be used to find out if stfu counts hundreds/thousands of clicks correctly.
            2. The test fails because of the variable getscore that claims not being a number for some reason

TS2-teamname.js
    TC1 - valid name
        Purpose: 
            To test that a valid name can be entered
        Steps:
            1. opens the app url
            2. enters a valid team name
            3. clicks the button 
            4. checks that the click lead to redirection to url/valid team name
    TC2 - invalid name
        Purpose: 
            To test that an invalid name leads to an error
        Steps:
            1. opens the app url
            2. enters an ivalid team name
            3. clicks the button 
            4. checks if the error message appeared
            5. checks that there was no redirection to a "click for team" url

General note:  Due to technical difficulties, the tests have been run on local (and quite makeshift) environment and may not work.
