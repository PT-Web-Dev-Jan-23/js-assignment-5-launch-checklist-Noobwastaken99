// Write your helper functions here!
require('isomorphic-fetch');
import fetch from "node-fetch";

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById("missionTarget");
    // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    // alerts
    if (testInput=== "") {
        return "Empty";
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else if (isNaN(numberInput) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Make sure to enter valid information for each field!");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        } else if (fuelLevel < 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            //console.log(fuelStatus);
        } else if (cargoLevel > 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            //console.log(cargoStatus);
        } else {
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            launchStatus.style.color = "rgb(65, 159, 106)";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            //console.log("ran4");
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let entry =  Math.floor(Math.random()*planets.length);
    return planets[entry];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
