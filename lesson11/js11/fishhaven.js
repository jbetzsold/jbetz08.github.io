const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=8dcaee08b94010faf8669925abedc83a"
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

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=a2024ffc37e8b20c22ad1e23d751f3b6"
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


// hamburger menu
const hambutton = document.querySelector('#menu-icon');
const mainnav= document.querySelector('.navigation')

hambutton.addEventListener('click',() => {mainnav.classList.toggle('responsive')},false);

window.onresize =() => {if(window.innerWidth > 643) mainnav.classList.remove('responsive')};
    

// date object    
    const now = new Date();
    const today = now.getDay();
    document.querySelector('#daynumber').textContent = now.getDate();
    const month = now.getMonth();
    document.querySelector('#year').textContent = now.getFullYear();
    
    switch (today) {
        case 0:
            document.querySelector('#dayofweek').textContent = 'Sunday';
            document.getElementById('day1').textContent = 'Sun';
            document.getElementById('day2').textContent = 'Mon';
            document.getElementById('day3').textContent = 'Tue';
            document.getElementById('day4').textContent = 'Wed';
            document.getElementById('day5').textContent = 'Thu';
            break;
        case 1:
            document.querySelector('#dayofweek').textContent = 'Monday';
            document.getElementById('day1').textContent = 'Mon';
            document.getElementById('day2').textContent = 'Tue';
            document.getElementById('day3').textContent = 'Wed';
            document.getElementById('day4').textContent = 'Thu';
            document.getElementById('day5').textContent = 'Fri';
            break;
        case 2:
            document.querySelector('#dayofweek').textContent = 'Tuesday';
            document.getElementById('day1').textContent = 'Tue';
            document.getElementById('day2').textContent = 'Wed';
            document.getElementById('day3').textContent = 'Thu';
            document.getElementById('day4').textContent = 'Fri';
            document.getElementById('day5').textContent = 'Sat';
            break;
        case 3:
            document.querySelector('#dayofweek').textContent = 'Wednesday';
            document.getElementById('day1').textContent = 'Wed';
            document.getElementById('day2').textContent = 'Thu';
            document.getElementById('day3').textContent = 'Fri';
            document.getElementById('day4').textContent = 'Sat';
            document.getElementById('day5').textContent = 'Sun';
            break;
        case 4:
            document.querySelector('#dayofweek').textContent = 'Thursday';
            document.getElementById('day1').textContent = 'Thu';
            document.getElementById('day2').textContent = 'Fri';
            document.getElementById('day3').textContent = 'Sat';
            document.getElementById('day4').textContent = 'Sun';
            document.getElementById('day5').textContent = 'Mon';
            break;
        case 5:
            document.body.onload = addElement;
            document.querySelector('#dayofweek').textContent = 'Friday';
            document.getElementById('day1').textContent = 'Fri';
            document.getElementById('day2').textContent = 'Sat';
            document.getElementById('day3').textContent = 'Sun';
            document.getElementById('day4').textContent = 'Mon';
            document.getElementById('day5').textContent = 'Tue';
            break;
        case 6:
            document.querySelector('#dayofweek').textContent = 'Saturday';
            document.getElementById('day1').textContent = 'Sat';
            document.getElementById('day2').textContent = 'Sun';
            document.getElementById('day3').textContent = 'Mon';
            document.getElementById('day4').textContent = 'Tue';
            document.getElementById('day5').textContent = 'Wed';
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
    
  
// pop up message
    function addElement () {
    
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "banner");
    
        const newContent = document.createTextNode("Saturday = Preston Pancakes in the Park! 9:00 a.m.\n Saturday at the city park pavilion.");
        newDiv.appendChild(newContent);
    
        const currentDiv = document.getElementById("yes");
    
        document.body.insertBefore(newDiv, currentDiv);
    
    }
    
    
// google web font
    WebFont.load({
        google: {
            families: [
                'Oswald', 'Sans-serif'
            ]
        }
    });
    

//town events data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven") {

            let card = document.createElement('div');
            let event1 = document.createElement('h4');
            let event2 = document.createElement('h4');
            let event3 = document.createElement('h4');            

            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];

            card.appendChild(event1);
            card.appendChild(event2);
            card.appendChild(event3);

            document.querySelector('section.events').appendChild(card);

        }


    }

    

  });