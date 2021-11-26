// date object
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date(dateString);
// var dayName = days[d.getDay()];
const now = new Date();
const today = now.getDay();
new Date().toLocaleString('en-us', {  weekday: 'long' })










// rexburg weather api
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5605242&units=imperial&appid=e3b907dda53f2fc7385fff3a117d7aea";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        i = 0;
        forecast.forEach(x => {
            let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
            let description = x.weather[0].description;

            new Date(x.dt_txt).toLocaleString('en-us', {  weekday: 'long' })
            document.getElementById(`temp${i + 1}`).textContent = Math.round(x.main.temp);
            document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${1 + 1}`).setAttribute('alt', description);

            i++;

        });
  });

