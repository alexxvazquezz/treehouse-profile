// Problem: We need a simple way to look at a users badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

// 1. Create a web server

var http = require('http');
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function() {
    response.write(new Date() + '\n')
  }, 1000);
  //response.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server runing at http://127.0.0.1:1337/');

// 2. Handle HTTP route GET / and POST / i.e. Home
  //if url == "/" && GET
    // Show search
  //if ur == "/" && POST
    // Redirect to /:username
// 3. Handle HTTP route GET /:username i.e. /chalkers /username
  //if url =="/..."
    //get json from Treehouse
      //on "end"
        // show profile
      // on "error"
        //show the error

// 4. A function that handles the reading of files (templates) and merge in the values
  // Read from file and get a string
    // Merge values in to string
