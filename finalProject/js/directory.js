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

function gridView() {
    var x = document.querySelector("cards");
    if (x.style.display === "grid") {
        x.style.display = "none";
    }
    else {
        x.style.display = "grid";
    }
}

function listView() {
    var x = document.querySelector("cards");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
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

// Google font loader
WebFont.load({
    google: {
        families: [
            'Montserrat', 'Sans-serif'
        ]
    }
});


//json data pull
const fetchAPI = "https://jbetz08.github.io/finalProject/json/directory.json"

fetch(fetchAPI)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const business = jsObject['Businesses'];

    for (let i = 0; i < business.length; i++) {
        let card = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let phone = document.createElement('h4');
        let address = document.createElement('p');
        let website = document.createElement('p');

        image.setAttribute('src', business[i].logo);
        image.setAttribute('alt', business[i].name + ' logo');
        name.textContent = business[i].name;
        phone.textContent = business[i].phone;
        address.textContent = business[i].address;
        website.textContent = business[i].website;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);

        document.querySelector('div.cards').appendChild(card);

    }
});