const requestURL = 'https://icanhazdadjoke.com/';
let h = new Headers({
    Accept: 'application/json',
    'User-Agent': 'jbetzsold28@gmail.com',
});



function newJoke() {
    fetch(requestURL, {
        headers: h,
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          console.log(jsonObject);

          let joke = document.createElement('p');

          document.getElementById('dad-joke').innerHTML = jsonObject.joke


      })
}

/*fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(json => console.log(json))*/

/*let response = fetch(requestURL, {
    headers: {
      User Agent: 
    }
  });*/