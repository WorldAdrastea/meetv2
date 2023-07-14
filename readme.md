# Features
## Feature 1: Filter Events By City

User Story: As a user I should be able to filter events by city so that I can search for events around that given city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. 

Given that the user hasn't search for any city -> When the user opens the app -> Them the user should a list of all upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.

Given the main page is open -> When user starts typing in the city textbox -> Then the user should see a list of cities (suggestions) that match what they've typed

Scenario 3: User can select a city from the suggested list.

Given the user was typing "Berlin" in the city textbox and the list of suggested cities is showing -> When the user selects a city (e.g., “Berlin, Germany”) from the list -> Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

## Feature 2: Show/Hide An Event's Details

User Story: As a user I should be able to show or hide an event's details so that I can view extra infomation about the event.

Scenario 1: An event element is collapsed by default

Given that the user chooses a city -> When the user receives the list of events of that city -> Then the event element should collapse by default

Scenario 2: User can expand an event to see its details

Given the user has chosen an event -> When the user clicks on the event -> Then the event details will be shown

Scenario 3: User can collapse an event to hide its details

Given the user has opened an event up and decides that they no longer need it -> When the user clicks on the event -> Then the event will collapse and hide its details

## Feature 3: Specify Number Of Events

User Story: As a user I should be able to specify the number of events that are displayed so that I choose how many events are displayed

Scenario 1: When user hasn’t specified a number, 32 is the default number

Given the user has not specified a number -> When the user has selected a city -> Then the deafult number of events shown will be 32

Scenario 2: User can change the number of events they want to see

Given the user has selected a city and 32 events are shown -> When the user wants to change how many events they want to view -> Then the user should be able to change how many events are displayed

## Feature 4: Use The App When Offline

User Story: As a user I should be able to user the app when I am offline so that I can still access the information when I have not connection to the internet

Scenario 1: Show cached data when there’s no internet connection

Given the user has no connection to the internet -> When the user accesses the app -> Then the cached data will still be available to the user

Scenario 2: Show error when user changes the settings (city, time range)

Given the user has changed their settings -> When the user opens their app another time -> Then an error should display allowing the user to know when the changes have been made or not

## Feature 5: Data Visualization

User Story: As a user I should be able to have an option to view the data (whether it be a chart, graph etc.) so that I can clearly see the amount of upcoming or ongoing events in each city

Scenario 1: Show a chart with the number of upcoming events in each city

Given the user has not selected a city -> When the user wants to see how many events are in which city -> Then they should be able to view the information in a chart or graph that displays the number of events in the chosen cities

## How this application will use serverless functions
Feature 1: The application will require event filtering and this will be done with serverless functions. A large benefit to this would be the reduced code in the lambda functions. It will process the filtering on the backend, which activates from the frontend. It will be able to retrieve the list of events and sort by city and then return the list to the frontend.

Feature 2: N/A

Feature 3: The feature for specifying the number of events will be derivative of feature 1 where it will return the number of events from the filtered list.

Feature 4: The application will use data caching and local storage to allow the app to be used offline.

Feature 5: Using the data from feature 1, the application will use serverless functions to create chart and graph data. When requested from the frontend, the function triggers and fetches data from the API and returns the filtered data back.

## How to start the project locally

After cloning the repo from the Github, run `npm install` to install all dependencies. You can then login to the app using a google account - please send me a request to add to Google Cloud Console if app is blocked.