// Problem: We need a simple way to look at a users badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP
const http = require('http');
const router = require('./router.js');
const hostname = '127.0.0.1';
const port = 3000;

// 1. Create a web server

http.createServer((req, res) => {
  router.home(req, res);
  router.user(req,res);
}).listen(port, hostname);
console.log(`Server running at https://${hostname}:${port}/`);

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
