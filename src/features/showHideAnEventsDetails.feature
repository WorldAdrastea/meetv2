Feature: Show/Hide An Event's Details

Scenario: An event element is collapsed by default
    Given that the user chooses a city
    When the user receives the list of events of that city
    Then the event element should collapse by default

Scenario: User can expand an event to see its details
    Given the user has chosen an event
    When the user clicks on the event
    Then the event details will be shown

Scenario: User can collapse an event to hide its details
    Given the user has opened an event up and decides that they no longer need it
    When the user clicks on the event
    Then the event will collapse and hide its details