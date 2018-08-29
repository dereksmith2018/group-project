//BACKEND
function City (continent, season, climate, transportation, activity){
  this.continent= continent;
  this.season= season;
  this.climate= climate;
  this.transportation= transportation;
  this.activity= activity;
}

function outPut(){
  if (userInput.cityName === City){
  display.show("#hideCities")
}else{
  if (userInput === !City){
    display.show("#hideCities")
  }
}
}

// var cities =[
//   new City("vancover", "North America", "Any", "Mild", "Rental", "Outdoors"),
//   new City("newyork", "North America", "Any", "Mild", "Public", "Outdoors"),
//   new City("jacksonhole", "North America", "Any", "Ranges", "Public", "Outdoors"),
//   new City("breckenridge", "North America", "Any", "Ranges", "Rental", "Outdoors"),
//   new City("yosemite", "North America", "Summer", "Ranges", "Rental", "Outdoors"),
//   new City("honolulu", "North America", "Summer", "Hot", "Rental", "Outdoors"),
//   new City("bali", "Asia", "Summer", "Hot", "Public", "Outdoors"),
//   new City("manila", "Asia", "Summer", "Hot", "Public", "Outdoors"),
//   new City("phuket", "Asia", "Winter", "Hot", "Public", "Outdoors"),
//   new City("sansebastian", "Europe", "Summer", "Hot", "Public", "Outdoors"),
//   new City("barcelona", "Europe", "Summer", "Hot", "Public", "Outdoors"),
//   new City("porto", "Europe", "Summer", "Hot", "Public", "Outdoors"),
//   new City("santorini", "Europe", "Summer", "Hot", "Public", "Getaway"),
//   new City("prague", "Europe", "Summer", "Mild", "Public", "Outdoors"),
//   new City("paris", "Europe", "Summer", "Mild", "Public", "Indoors"),
//   new City("london", "Europe", "Any", "Mild", "Public", "Indoors"),
//   new City("florence", "Europe", "Any", "Mild", "Public", "Outdoors"),
//   new City("dubai", "Surprise Me", "Any", "Hot", "Rental", "Outdoor"),
//   new City("stlucia", "Surprise Me", "Any", "Hot", "Public", "Getaway"),
//   new City("sydney", "Surprise Me", "Summer", "Hot", "Public", "Outdoors")
// // ]
// function searchCity(cityName)
// for (var i = 0; i < cities.length; i++){
//   if(cityName === cities[i].name){
//     return cities[i];
//     console.log(cities[i]);
//   }
// }



var vancouver = {cityName:"vancouver", continent:"North America", season:"Any", climate:"Mild", transportation:"Rental", activity:"Outdoors"};
var newyork = {cityName:"newyork", continent:"North America", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
var jacksonhole = {cityName:"jacksonhole", continent:"North America", season:"Any", climate:"Ranges", transportation:"Public", activity:"Outdoors"};
var breckenridge = {cityName:"breckenridge", continent:"North America", season:"Any", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
var yosemite = {cityName:"yosemite", continent:"North America", season:"Summer", climate:"Ranges", transportation:"Rental", activity:"Outdoors"};
var honolulu = {cityName:"honolulu", continent:"North America", season:"Summer", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
var bali = {cityName:"bali", continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var manila = {cityName:"manila", continent:"Asia", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var phuket = {cityName:"phuket", continent:"Asia", season:"Winter", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var sansebastian = {cityName:"sansebastian", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var barcelona = {cityName:"barcelona", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var porto = {cityName:"porto", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var santorini = {cityName:"santorini", continent:"Europe", season:"Summer", climate:"Hot", transportation:"Public", activity:"Getaway"};
var prague = {cityName:"prague", continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Outdoors"};
var paris = {cityName:"paris", continent:"Europe", season:"Summer", climate:"Mild", transportation:"Public", activity:"Indoors"};
var london = {cityName:"london", continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Indoors"};
var florence = {cityName:"florence", continent:"Europe", season:"Any", climate:"Mild", transportation:"Public", activity:"Outdoors"};
var dubai = {cityName:"dubai", continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Rental", activity:"Outdoors"};
var stlucia = {cityName:"stlucia", continent:"Surprise Me", season:"Any", climate:"Hot", transportation:"Public", activity:"Getaway"};
var sydney = {cityName:"sydney", continent:"Surprise Me", season:"Summer", climate:"Hot", transportation:"Public", activity:"Outdoors"};
var search = [vancouver, newyork, jacksonhole, breckenridge, yosemite, honolulu, bali, manila, phuket, sansebastian, barcelona, porto, santorini, prague, paris, paris, london, florence, dubai, stlucia, sydney];


//FRONTEND
$(document).ready(function(){

$("form#surveyQuestions").submit(function(event){
  event.preventDefault();
  var continent = $("input:radio[name=continent]:checked").val();
  var season = $("input:radio[name=season]:checked").val();
  var climate = $("input:radio[name=climate]:checked").val();
  var transportation = $("input:radio[name=transportation]:checked").val();
  var activity = $("input:radio[name=activity]:checked").val();
  var input = {cityName: "", continent: continent, season: season, climate: climate, transportation: transportation, activity:activity};
  var isEqual = true;
  for (var i = 0; i < search.length; i++) {
    for (var prop in input) {
      if (prop === "cityName" ) {
        continue;
      } else {
      if (input[prop] !== search[i][prop]) {
       isEqual = false;
      }
    }
    }
    if (isEqual) {console.log("it's a match")}
  }

console.log(input);
});
});
