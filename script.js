// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { myFetch, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    //console.log("ran");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelLevelInput.value;
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoMass = cargoMassInput.value;

    //console.log("ran2");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    //console.log("ran3");
   });
   
});