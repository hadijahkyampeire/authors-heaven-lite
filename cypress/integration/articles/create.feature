Feature: Creating an article
        Background:
            Given the user is logged in
  
        Scenario: The user should be able to click the button to create a new article
            Given the user is on the articles page
             When the user clicks on the create new article button
             Then the user should be on the create new article page
        @article
        Scenario: The user should be able to create a draft article
            Given the user is on the create new article page
             When the user enters the article information
              And the user clicks on the "#create-as-draft" button
             Then the new article should be created as a draft

        @publishedArticle
        Scenario: The user should be able to create and publish article
            Given the user is on the create new article page
             When the user enters the published article information
              And the user clicks on the "#create-and-publish" button
             Then the new article should be created and published