// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.darksky.net/forecast/9ec3aff31bf59b89c5dd23c9325ab439/42.3601,-71.0589', true)

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send()
