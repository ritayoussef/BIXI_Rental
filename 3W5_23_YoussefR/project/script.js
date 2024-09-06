"use strict"
let btn = document.getElementById("button");
btn.addEventListener('click', bikeRentalUserInfo);
let maxMinutesSlider = document.getElementById("maxMinutes");
let range = document.getElementById("range-value");
range.innerHTML = maxMinutesSlider.value;

maxMinutesSlider.oninput = function() {
  range.innerHTML = `${this.value} minutes`;
}

async function bikeRentalUserInfo() 
 {
    let memberName = document.getElementById("firstName").value;
    let memberEmail = document.getElementById("email").value;
    let stationId = document.getElementById("stationId").value;
      
        
    const userInfoResponse = await fetch(`http://129.80.194.57/userInfo/${memberName}/${memberEmail}`);
    let userInfo = await userInfoResponse.json();
    

    const memberInfoResponse = await fetch(`http://129.80.194.57/memberInfo/${userInfo[0].MembershipTypeId}`);
    let memberInfo = await memberInfoResponse.json();
    

    const stationInfoResponse = await fetch(`http://129.80.194.57/station/${stationId}`);
    let stationInfo = await stationInfoResponse.json();

    let userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
    <h2>${memberName}'s Membership Information</h2>
    <p>Free Minutes: ${memberInfo[0].FreeMinutes}</p>
    <p>Rate per Minute: ${memberInfo[0].RegularBikePricePerMinute}</p>
    <p>Regular Bikes Available at Starting Station: ${stationInfo[0].RegularBikesCount}</p>
    `;

    const nearbyStationsResponse = await fetch(`http://129.80.194.57/nearbystations/${stationId}`);
    let nearbyStations = await nearbyStationsResponse.json();

    let neighbouringStationsDiv = document.getElementById("neighbouringStations");
    neighbouringStationsDiv.innerHTML = "<h2>Neighbouring Stations</h2>";     
     
    neighbouringStationsDiv.innerHTML += `<p> Station Name: ${stationInfo[0].StationName} | Total Docks: ${stationInfo[0]['Total Docks']}</p>`;
    const averageBikeSpeedResponse = await fetch(`http://129.80.194.57/averageBikeSpeed`);
    let averageBikeSpeed = await averageBikeSpeedResponse.json();

    neighbouringStationsDiv.innerHTML += `<p> Average Bike Speed: ${averageBikeSpeed.speed} km/h </p>`;
    
    neighbouringStationsDiv.innerHTML += `<p> Please choose your path: </p>`;

    
    let nearbyStationBtnOne = document.createElement('button');
    const stationOneNameResponse = await fetch(`http://129.80.194.57/station/${nearbyStations[0].SecondStationId}`);
    let stationName = await stationOneNameResponse.json(); 
     nearbyStationBtnOne.innerHTML =  `${stationName[0].StationName}`;
     neighbouringStationsDiv.appendChild(nearbyStationBtnOne);
     
     
     let nearbyStationBtnTwo = document.createElement('button');
     const stationTwoNameResponse = await fetch(`http://129.80.194.57/station/${nearbyStations[1].SecondStationId}`);
     let stationTwoName = await stationTwoNameResponse.json();
     nearbyStationBtnTwo.innerHTML =  ` ${stationTwoName[0].StationName} `;  
     neighbouringStationsDiv.appendChild(nearbyStationBtnTwo);
 
     

     let nearbyStationBtnThree = document.createElement('button');
     const stationThreeNameResponse = await fetch(`http://129.80.194.57/station/${nearbyStations[2].SecondStationId}`);
     let stationThreeName = await stationThreeNameResponse.json();
     nearbyStationBtnThree.innerHTML =  ` ${stationThreeName[0].StationName} `;  
     neighbouringStationsDiv.appendChild(nearbyStationBtnThree);
        
      
     
    nearbyStationBtnOne.addEventListener('click', () => displayChosenPath(nearbyStations[0]));
    nearbyStationBtnTwo.addEventListener('click', () => displayChosenPath(nearbyStations[1]));
    nearbyStationBtnThree.addEventListener('click', () => displayChosenPath(nearbyStations[2]));
     
      
   }
   async function displayChosenPath(chosenStation) {
    const pathResponse = await fetch(`http://129.80.194.57/path/${chosenStation.FirstStationId}/${chosenStation.SecondStationId}`);
    let pathStations = await pathResponse.json();

    let chosenPathDiv = document.getElementById("chosenPath");
    chosenPathDiv.innerHTML = "<h2>Chosen Path</h2>";
    const distanceResponse = await fetch(`http://129.80.194.57/distance/${chosenStation.FirstStationId}/${chosenStation.SecondStationId}`);
    let distance = await distanceResponse.json();
    let distanceMeters = distance[0].Distance;
    chosenPathDiv.innerHTML += `<p> Distance Between the Two Stations: ${distanceMeters} meters </p>`;

    for (let pathStation of pathStations[0]) {
        let stationId = pathStation.StationId;

        const stationInfoResponse = await fetch(`http://129.80.194.57/station/${stationId}`);
        let additionalInfo = await stationInfoResponse.json();

        let pathStationsBtn = document.createElement('button');
        pathStationsBtn.innerHTML = additionalInfo[0].StationName;
        chosenPathDiv.appendChild(pathStationsBtn);

        pathStationsBtn.addEventListener('click', () => additionalInformation(stationId));
     const averageBikeSpeedResponse = await fetch(`http://129.80.194.57/averageBikeSpeed`);
      let averageBikeSpeed = await averageBikeSpeedResponse.json(); 
      let maxMinutes = document.getElementById("maxMinutes").value; 
      let speedInMeters =  averageBikeSpeed.speed * maxMinutes;
        await new Promise(resolve => {
          const delay = distance[0].Distance / speedInMeters * 60 * 1000;
            setTimeout(resolve, delay);
        });
    }
}
             
    async function additionalInformation(stationId)
    {
        let chosenPathDiv = document.getElementById("chosenPath");
        const stationInfoResponse = await fetch(`http://129.80.194.57/station/${stationId}`);
        let additionalInfo = await stationInfoResponse.json();
        chosenPathDiv.innerHTML += `
        <p>Bike Availability: ${additionalInfo[0]['Bike availability']}</p>
        <p>Longitude: ${additionalInfo[0].Longitude}</p>
        <p>Latitude: ${additionalInfo[0].Latitude}</p>
      `;
    }
     