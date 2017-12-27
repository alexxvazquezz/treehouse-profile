var router = require("./router.js")
// The 4 P's of problem solving
// Prepare
// Plan
// Perform
// Perfect

// Problem: Find a simple way to look at a user's badge count and JS points from a web browser
// Solution: User Node.js to serve our files and merge in the values brought back from the rest API

// Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

//Function that handles the reading of files and merge in the values
