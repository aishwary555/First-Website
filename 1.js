const apikey="e39b936358137cff1510253b3d4dcff5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchbox=document.getElementsByClassName("jai")[0];
const searchbtn=document.getElementsByClassName("btn")[0];
const iconic=document.getElementsByClassName("weather-icon")[0];

async function check(city)
{
	const response=await fetch(apiurl + city + `&appid=${apikey}`);
	var data=await response.json();

	console.log(data);

	document.getElementsByClassName("temp")[0].innerHTML=data.main.temp + "°C";
	document.getElementsByClassName("city")[0].innerHTML=data.name;
	document.getElementsByClassName("humidity")[0].innerHTML=data.main.humidity + "%";
	document.getElementsByClassName("wind")[0].innerHTML=data.wind.speed + "km/h";

	if(data.weather[0].main==="Clear")
	{
		iconic.src="clear.png";
	}
	else if(data.weather[0].main==="Clouds")
	{
		iconic.src="clouds.png";
	}
	else if(data.weather[0].main==="Drizzle")
	{
		iconic.src="drizzle.png";
	}
	else if(data.weather[0].main==="Mist")
	{
		iconic.src="mist.png";
	}
	else if(data.weather[0].main==="Rain")
	{
		iconic.src="rain.png";
	}
	else if(data.weather[0].main==="Snow")
	{
		iconic.src="snow.png";
	}
	else if(data.weather[0].main==="Haze")
	{
		iconic.src="haze.png";
	}

    document.getElementsByClassName("weather")[0].style.display="block";

}
searchbtn.addEventListener("click",function(){
	check(searchbox.value);
})


