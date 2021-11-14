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

// pop up message
function addElement () {

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "banner");

    const newContent = document.createTextNode("Saturday = Preston Pancakes in the Park! 9:00 a.m.\n Saturday at the city park pavilion.");
    newDiv.appendChild(newContent);

    const currentDiv = document.getElementById("yes");

    document.body.insertBefore(newDiv, currentDiv);

}

// google font api
WebFont.load({
    google: {
        families: [
            'Oswald', 'Sans-serif'
        ]
    }
});

// creating town data from json file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {

            let card = document.createElement('section');
            let info = document.createElement('div');
            let townName = document.createElement('h2');
            let townMotto = document.createElement('p');
            let founded = document.createElement('h3');
            let pop = document.createElement('h4');
            let rainfall = document.createElement('h5');
            let image = document.createElement('img');

            card.className = towns[i].name;
            townName.textContent = towns[i].name;
            townMotto.textContent = towns[i].motto;
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'img9/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            card.appendChild(info);
            card.appendChild(image);
            info.appendChild(townName);
            info.appendChild(townMotto);
            info.appendChild(founded);
            info.appendChild(pop);
            info.appendChild(rainfall);

            document.querySelector('div.cards').appendChild(card);

        }


    }

    

  });