var windSpeed = document.getElementById("windspeed").innerText;
var temperature = document.getElementById("temp").innerText;
var wc = document.getElementById("windchill");


function calcWindChill (windSpeed, temperature) {
    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windSpeed, 0.16);

    if (temperature <= 50 && windSpeed > 3) {
        return windChill.toFixed(2);
    }

    else {
        return "N/A";
    }
    
}

wc.innerHTML = calcWindChill(windSpeed, temperature);

console.log(calcWindChill(windSpeed, temperature))
