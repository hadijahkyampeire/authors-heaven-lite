Feature: User Registration

        Scenario: The user should be able to signup
            Given a user is on the landing page
             When a user clicks the register button
             Then the user should go to the signup page
             When the user inputs information
              And the user submits the form
             Then the user should go to login page