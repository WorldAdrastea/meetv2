Feature: Specify Number Of Events

Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user has not specified a number
    When the user has selected a city
    Then the deafult number of events shown will be 32

Scenario: User can change the number of events they want to see
    Given the user has selected a city and 32 events are shown
    When the user wants to change how many events they want to view
    Then the user should be able to change how many events are displayed