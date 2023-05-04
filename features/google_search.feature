Feature: Google search for Orange Bank

    Scenario: Verify search results for Orange Bank, more than 100000 results
        Given I open "https://www.google.es"
        And I accept cookies
        When I search for "Orange Bank"
        Then I should see more than 100000 results
    
    Scenario: Verify search results for Orange Bank, less than 100000 results
        Given I open "https://www.google.es"
        And I accept cookies
        When I search for "Orange Bank"
        Then I should see less than 100000 results

