
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=90f7c646aab0312f6906d70603fbc085"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;
        var windSpeed = jsObject.wind.speed;
        var temperature = jsObject.main.temp;
        var wc = document.getElementById('windchill');

        function calcWindChill (windSpeed, temperature) {
            let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windSpeed, 0.16);

            if (temperature <= 50 && windSpeed > 3) {
                return Math.round(windChill);
            }

            else {
                return "N/A";
            }
        }

        wc.textContent = calcWindChill(windSpeed, temperature);
        console.log(wc);
    });

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3acc9bdf01c7cbab075351d6e380495a"
fetch(forecastAPI)
    .then((response) => response.json())
    .then((forecastObject) => {
        console.log(forecastObject);
        
        const forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        i = 0;
        forecast.forEach(x => {
            let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
            let description = x.weather[0].description;

            document.getElementById(`temp${i + 1}`).textContent = Math.round(x.main.temp);
            document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${1 + 1}`).setAttribute('alt', description);

            i++;

        });

    });

    

