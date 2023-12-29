fetch('http://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
  // code to execute with jsonResponse
});

fetch('url')
.then(response => response.json())
.then(jsonResponse => {
  // code to execute with jsonResponse
});


/* 
  if (response.ok) {
    return response.json();
  };
*/

fetch('url') // sends request
.then(response => response.json()) // converts response object to JSON
.then(jsonResponse => {
  // code to execute with jsonResponse
});