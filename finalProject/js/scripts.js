// navigation function
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

//lazy-loading image gallery
const imagesToLoad = document.querySelectorAll('img[data-src]');
console.log(imagesToLoad);

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

// MDN Web Docs

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

// js dates
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
        break;
    case 1:
        document.querySelector('#dayofweek').textContent = 'Monday';
        document.getElementById('day1').textContent = 'Mon';
        document.getElementById('day2').textContent = 'Tue';
        document.getElementById('day3').textContent = 'Wed';
        break;
    case 2:
        document.querySelector('#dayofweek').textContent = 'Tuesday';
        document.getElementById('day1').textContent = 'Tue';
        document.getElementById('day2').textContent = 'Wed';
        document.getElementById('day3').textContent = 'Thu';
        break;
    case 3:
        document.querySelector('#dayofweek').textContent = 'Wednesday';
        document.getElementById('day1').textContent = 'Wed';
        document.getElementById('day2').textContent = 'Thu';
        document.getElementById('day3').textContent = 'Fri';
        break;
    case 4:
        document.querySelector('#dayofweek').textContent = 'Thursday';
        document.getElementById('day1').textContent = 'Thu';
        document.getElementById('day2').textContent = 'Fri';
        document.getElementById('day3').textContent = 'Sat';
        break;
    case 5:
        
        document.querySelector('#dayofweek').textContent = 'Friday';
        document.getElementById('day1').textContent = 'Fri';
        document.getElementById('day2').textContent = 'Sat';
        document.getElementById('day3').textContent = 'Sun';
        break;
    case 6:
        document.querySelector('#dayofweek').textContent = 'Saturday';
        document.getElementById('day1').textContent = 'Sat';
        document.getElementById('day2').textContent = 'Sun';
        document.getElementById('day3').textContent = 'Mon';
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

// Google font loader
WebFont.load({
    google: {
        families: [
            'Montserrat', 'Sans-serif'
        ]
    }
});

// weather API call

const vineyardAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.2969&lon=-111.6946&exclude=hourly,minutely&units=imperial&appid=c30652e920763ebee192ccf7b99f8490';
fetch(vineyardAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        // current weather
        document.getElementById('temp').textContent = Math.round(jsObject.current.temp);
        document.getElementById('condition').textContent = jsObject.current.weather[0].description;
        document.getElementById('humid').textContent = jsObject.current.humidity;


        // 3 day forecast
        const forecast = jsObject.daily;
        i = 0;
        forecast.forEach(x => {
            let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
            let description = x.weather[0].description;

            var currentTemp = document.getElementById(`temp${i + 1}`);
            if (currentTemp) {
                currentTemp.textContent = Math.round(x.temp.day);
            }

            var imgsrc = document.getElementById(`icon${i + 1}`);
            if (imgsrc) {
                imgsrc.setAttribute('src', imagesrc);
            }

            var imgalt = document.getElementById(`icon${i + 1}`);
            if (imgalt) {
                imgalt.setAttribute('alt', description);
            }

            i++;
        });


    });

    