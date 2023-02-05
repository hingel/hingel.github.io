//uncomment:
loadApi();

const date = new Date();
let currentHour = date.getHours(date.getTime);
console.log(currentHour);

async function loadApi() {
    const url = new URL (`https://api.open-meteo.com/v1/forecast?latitude=57.71&longitude=11.97&hourly=temperature_2m`);

    const response = await fetch(url);
    if(response.status === 200){
        const jsonresponce = await response.json();

        console.log(jsonresponce);

        console.log(jsonresponce.hourly.temperature_2m[currentHour]);

        const weatherDiv = document.getElementById("currentWeatherQuote");

        //Kan lägga detta i variabler och modifiera utfallet beroende på temperatur.

        weatherDiv.innerText = `Oh, it is ${jsonresponce.hourly.temperature_2m[currentHour]} degrees Celcius outside.

        It is a lovely weather for a hot cup of coffee!`
    }
    else{
        const weatherDiv = document.getElementById("currentWeatherQuote");
        weatherDiv.innerText = "I couldn't read you local weather but it is always perfect time for a cup of coffee."
    }
}