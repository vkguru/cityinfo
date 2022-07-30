function showTime() {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	let noon = 12;
	let meridian = '';

	if (hours >= noon) {
		meridian = 'PM';
	} else {
		meridian = 'AM';
	}
		
	if (hours > noon) {
		hours = hours - 12;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (seconds < 10) {
		seconds = '0' + seconds;
	}


	const clock = document.getElementById("clock");
	let clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';


	clock.textContent = clockTime;

	// Seconds counter
	let oneSecond = 1000;
		setInterval(showTime, oneSecond);
};

showTime();

let data = [
	{
		"city": "Lagos", 
		"brief": "Lagos, Nigeria's largest city, sprawls inland from the Gulf of Guinea across Lagos Lagoon. Victoria Island, the financial center of the metropolis, is known for its beach resorts, boutiques and nightlife. To the north, Lagos Island is home to the National Museum Lagos, displaying cultural artifacts and craftworks. Nearby is Freedom Park, once a colonial-era prison and now a major venue for concerts and public events.",
		"image": "Lagos.jpg"
	},
	{
		"city": "New York", 
		"brief": "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
		"image": "newyork.jpg"
	},
	{
		"city": "London", 
		"brief": "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
		"image": "london.jpg"
	},
	{
		"city": "Dubai", 
		"brief": "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
		"image": "dubai.jpg"
	},

];

function displayInfo(location, cityBrief, cityImage) {
	document.getElementById("city").textContent = location;

	document.getElementById("citybrief").textContent = cityBrief;

	document.getElementById("currentcity").src = `img/${cityImage}`;
}


window.addEventListener("load", (displayInfo(data[0].city, data[0].brief, data[0].image)))