# BIXI_Rental

Overview
The Bike Rental Project is a web application that allows users to retrieve and display information related to bike rentals. It provides details about the user's membership, nearby bike stations, and paths between stations, including distance and additional station information. Users can interact with the application to select paths and view detailed data on bike availability and geographical location.

Features
User Information: Fetch and display the user's membership information based on their name and email.
Station Information: Show details about the starting station and its bike availability.
Nearby Stations: List and display nearby bike stations and allow users to choose paths between them.
Chosen Path Details: Display details about the chosen path, including distance and intermediate stations.
Additional Station Information: Provide extra details such as bike availability, longitude, and latitude for each selected station.
Technologies Used
HTML/CSS: For creating and styling the web interface.
JavaScript: For dynamic content handling and API interactions.
Fetch API: For making asynchronous HTTP requests to the backend services.
How to Use

Enter User Information:
Input your first name and email address.
Select the station ID from which you wish to start.

Fetch and Display Information:
Click the "Submit" button to retrieve user membership details, station information, and nearby stations.
View your membership's free minutes and rates, along with regular bike availability at the starting station.

Choose a Path:
View a list of nearby stations and select a path by clicking on the provided buttons.
Information about the distance and stations along the chosen path will be displayed.

View Additional Information:
Click on intermediate stations along the path to view additional details such as bike availability and geographic coordinates.
Code Description

Event Listeners: Listeners are added to handle user interactions such as clicking the "Submit" button and selecting paths between stations.

Fetch Requests: Various API endpoints are called to fetch user info, station details, path information, and more.

Dynamic Content Updates: Content is dynamically updated based on the fetched data using JavaScript, creating buttons and displaying information on the web page.

File Structure
index.html: The main HTML file with the layout of the application.
styles.css: The CSS file for styling the application.
script.js: The JavaScript file containing the logic for interacting with the APIs and handling user input.

API Endpoints
GET /userInfo/{memberName}/{memberEmail}: Fetch user information based on name and email.
GET /memberInfo/{membershipTypeId}: Retrieve membership details.
GET /station/{stationId}: Get information about a specific bike station.
GET /nearbystations/{stationId}: List nearby stations from a given starting station.
GET /path/{firstStationId}/{secondStationId}: Get path information between two stations.
GET /distance/{firstStationId}/{secondStationId}: Retrieve the distance between two stations.
GET /averageBikeSpeed: Fetch the average bike speed.
