Feature: Login Feature
        Background:
            Given the user is not logged in

        Scenario: The user should be able to login
            Given the user is on the login page
             When the user inputs the right information
              And the user submits the form
             Then the user should go to articles page

        Scenario: The user should be not login with wrong credentials
            Given the user is on the login page
             When the user inputs the some information
              And the user submits the form
             Then the user should still be on the login page
        
        Scenario: The login form should require a user name to login
            Given the user is on the login page
             When the user enters their password
              And the user submits the form
             Then the user should still be on the login page

        Scenario: The login form should require a password to login
            Given the user is on the login page
             When the user enters their username
              And the user submits the form
             Then the user should still be on the login page

        Scenario: The user should need to login
            Given the user navigates to the articles page
             Then the user should be redirected to the login page