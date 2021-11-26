// regular page items
// google font load
WebFont.load({
    google: {
        families: [
            'Oswald', 'Sans-serif'
        ]
    }
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






