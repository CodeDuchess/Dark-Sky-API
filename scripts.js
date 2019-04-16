const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9ec3aff31bf59b89c5dd23c9325ab439/42.3601,-71.0589', true)
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      Object.keys(data).forEach(weather => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = weather.timezone;

      const h2 = document.createElement('h2');
      h2.textContent = weather.temperature;  
        
      const h3 = document.createElement('h3);
      h3.textContent = weather.humidity;                                  
        
      const p = document.createElement('p');
      p.textContent = weather.summary;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
    });
    
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();


