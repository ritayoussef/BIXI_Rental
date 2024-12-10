# 🚲 **BIXI_Rental**

## 🌟 **Overview**

The **Bike Rental Project** is a web application that allows users to retrieve and display information related to bike rentals. It provides details about the user's membership, nearby bike stations, and paths between stations, including distance and additional station information. Users can interact with the application to select paths and view detailed data on bike availability and geographical location.

---

## 🔑 **Features**

- 🧑‍💻 **User Information**: Fetch and display the user's membership information based on their name and email.
- 🏢 **Station Information**: Show details about the starting station and its bike availability.
- 📍 **Nearby Stations**: List and display nearby bike stations and allow users to choose paths between them.
- 🛤️ **Chosen Path Details**: Display details about the chosen path, including distance and intermediate stations.
- ℹ️ **Additional Station Information**: Provide extra details such as bike availability, longitude, and latitude for each selected station.

---

## 💻 **Technologies Used**

- 🖋️ **HTML/CSS**: For creating and styling the web interface.
- ✨ **JavaScript**: For dynamic content handling and API interactions.
- 🔄 **Fetch API**: For making asynchronous HTTP requests to the backend services.

---

## 📖 **How To Use The Application**

### 1️⃣ **Enter User Information:**
- Input your **first name** and **email address**.
- Select the **station ID** from which you wish to start.

### 2️⃣ **Fetch and Display Information:**
- Click the **"Submit" button** to retrieve:
  - 🚴 User membership details.
  - 📊 Station information.
  - 📍 Nearby stations.
- View:
  - Your membership's **free minutes** and **rates**.
  - Regular bike **availability** at the starting station.

### 3️⃣ **Choose a Path:**
- View a list of **nearby stations**.
- Select a path by clicking on the provided **buttons**.
- Information about the **distance** and **stations along the chosen path** will be displayed.

### 4️⃣ **View Additional Information:**
- Click on **intermediate stations** along the path to view:
  - 🚲 Bike availability.
  - 📍 Geographic coordinates (longitude and latitude).

---

## 🛠️ **Code Description**

### ⚡ **Event Listeners:**
- Listeners handle user interactions such as:
  - Clicking the **"Submit" button**.
  - Selecting **paths** between stations.

### 🔄 **Fetch Requests:**
- API endpoints are called to fetch:
  - User info.
  - Station details.
  - Path information.
  - Additional station data.

### 🖼️ **Dynamic Content Updates:**
- Content is dynamically updated using JavaScript to:
  - Display station and path details.
  - Create interactive buttons.

---

## 📂 **File Structure**

- 📄 **index.html**: The main HTML file with the layout of the application.
- 🎨 **styles.css**: The CSS file for styling the application.
- 🛠️ **script.js**: The JavaScript file containing logic for interacting with APIs and handling user input.

---

## 🌐 **API Endpoints**

| 🌍 **Endpoint**                           | 🔎 **Description**                                                   |
|-------------------------------------------|----------------------------------------------------------------------|
| **GET /userInfo/{memberName}/{memberEmail}** | Fetch user information based on name and email.                     |
| **GET /memberInfo/{membershipTypeId}**     | Retrieve membership details.                                         |
| **GET /station/{stationId}**               | Get information about a specific bike station.                      |
| **GET /nearbystations/{stationId}**        | List nearby stations from a given starting station.                 |
| **GET /path/{firstStationId}/{secondStationId}** | Get path information between two stations.                          |
| **GET /distance/{firstStationId}/{secondStationId}** | Retrieve the distance between two stations.                         |
| **GET /averageBikeSpeed**                  | Fetch the average bike speed.                                        |

---

## 🚴 **Enjoy Your Ride!**
Make your biking experience more enjoyable with **BIXI_Rental**! 🛤️✨
