Feature: Editing an article
        Background:
            Given the user is logged in

        @article
        Scenario: The user should be able to edit an article
            Given an article exists
              And the user is on the edit article page
             When the user updates the article description
              And the user clicks the update button
             Then the article should be updated with a new description