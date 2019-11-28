window.addEventListener('load', powerEvent, false);

function showTime() {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = '';

if (hours >= 12){
	meridian = 'PM';
} else {
	meridian = 'AM';
}

hours = hours - 12;

if (hours < 10){
	hours = '0' + hours;
}

if (minutes < 10) {
	minutes = '0' + minutes;
}

if (seconds < 10) {
	seconds = '0' + seconds;
}


var clock = document.getElementById("clock");
var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';


clock.innerHTML = clockTime;

// Seconds counter
var oneSecond = 1000;
setInterval(showTime, oneSecond);
};

showTime();



function powerEvent(e) {
	document.getElementById("la").addEventListener('click', lagos, false);
	document.getElementById("ny").addEventListener('click', newYork, false);
	document.getElementById("ln").addEventListener('click', london, false);
	document.getElementById("di").addEventListener('click', dubai, false);
}

function lagos() {
	var city = document.getElementById("city");
	city.innerHTML = 'Lagos';

	var brief = document.getElementById("citybrief");
	brief.innerHTML = "Lagos, Nigeria's largest city, sprawls inland from the Gulf of Guinea across Lagos Lagoon. Victoria Island, the financial center of the metropolis, is known for its beach resorts, boutiques and nightlife. To the north, Lagos Island is home to the National Museum Lagos, displaying cultural artifacts and craftworks. Nearby is Freedom Park, once a colonial-era prison and now a major venue for concerts and public events.";

	var image = document.getElementById("currentcity");
	image.src = "img/Lagos.jpg";
}

function newYork() {
	var city = document.getElementById("city");
	city.innerHTML = 'New York';

	var brief = document.getElementById("citybrief");
	brief.innerHTML = "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.";

	var image = document.getElementById("currentcity");
	image.src = "img/newyork.jpg"
}

function london() {
	var city = document.getElementById("city");
	city.innerHTML = 'London';

	var brief = document.getElementById("citybrief");
	brief.innerHTML = "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.";

	var image = document.getElementById("currentcity");
	image.src = "img/london.jpg"
}

function dubai() {
	var city = document.getElementById("city");
	city.innerHTML = 'Dubai';

	var brief = document.getElementById("citybrief");
	brief.innerHTML = "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.";

	var image = document.getElementById("currentcity");
	image.src = "img/dubai.jpg"
}
