function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

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


const menuButton = document.getElementById("menu-icon");
const mainnav = document.querySelector(".main-nav");
menuButton.addEventListener(
    "click",
    () => {
        mainnav.classList.toggle("expanded");
    },
    false
);
// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove("expanded");
};