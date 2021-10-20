// loading google fonts
WebFont.load({
    google: {
      families: ['Oswald']
    }
  });

// date objects in js
const now = new Date();
const today = now.getDay();
document.querySelector('#daynumber').textContent = now.getDate();
const month = now.getMonth();
document.querySelector('#year').textContent = now.getFullYear();

switch (today) {
    case 0:
        document.querySelector('#dayofweek').textContent = 'Sunday';
        break;
    case 1:
        document.querySelector('#dayofweek').textContent = 'Monday';
        break;
    case 2:
        document.querySelector('#dayofweek').textContent = 'Tuesday';
        break;
    case 3:
        document.querySelector('#dayofweek').textContent = 'Wednesday';
        break;
    case 4:
        document.querySelector('#dayofweek').textContent = 'Thursday';
        break;
    case 5:
        document.body.onload = addElement;
        document.querySelector('#dayofweek').textContent = 'Friday';
        break;
    case 6:
        document.querySelector('#dayofweek').textContent = 'Saturday';
        break;
    default:
        document.querySelector('#dayofweek').textContent = 'Something is wrong with day of week';
}

switch (month) {
    case 0:
        document.querySelector('#month').textContent = 'January';
        break;
    case 1:
        document.querySelector('#month').textContent = 'February';
        break;
    case 2:
        document.querySelector('#month').textContent = 'March';
        break;
    case 3:
        document.querySelector('#month').textContent = 'April';
        break;
    case 4:
        document.querySelector('#month').textContent = 'May';
        break;
    case 5:
        document.querySelector('#month').textContent = 'June';
        break;
    case 6:
        document.querySelector('#month').textContent = 'July';
        break;
    case 7:
        document.querySelector('#month').textContent = 'August';
        break;
    case 8:
        document.querySelector('#month').textContent = 'September';
        break;
    case 9:
        document.querySelector('#month').textContent = 'October';
        break;
    case 10:
        document.querySelector('#month').textContent = 'November';
        break;
    case 11:
        document.querySelector('#month').textContent = 'December';
        break;
    default:
        document.querySelector('#month').textContent = 'Something is messed up with month';
}

// banner alert
function addElement () {

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "banner");

    const newContent = document.createTextNode("Saturday = Preston Pancakes in the Park! 9:00 a.m.\n Saturday at the city park pavilion.");
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("yes");

    document.body.insertBefore(newDiv, currentDiv);

}

// hamburger menu
const hambutton = document.querySelector('#menu-icon');
const mainnav= document.querySelector('.navigation')

hambutton.addEventListener('click',() => {mainnav.classList.toggle('responsive')},false);

window.onresize =() => {if(window.innerWidth > 643) mainnav.classList.remove('responsive')};


// windspeed
var windSpeed = document.getElementById("windspeed").innerText;
var temperature = document.getElementById("temp").innerText;
var wc = document.getElementById("windchill");

function calcWindChill (windSpeed, temperature) {
    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windSpeed, 0.16);

    if (temperature <= 50 && windSpeed > 3) {
        return Math.round(windChill);
    }

    else {
        return "N/A";
    }
}

wc.innerHTML = calcWindChill(windSpeed, temperature);

console.log(calcWindChill(windSpeed, temperature))