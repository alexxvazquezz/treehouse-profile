// The 4 p's of problem solving

// Preperation --
// Problem: We need a simple way to view a user's badge count and JavaScirpt point from a web browswer
// Solution: User Node.js to perform the the profile lookup and serve our template via http

// Plan --
// 1. Create a Web Server
const http = require('http');
http.createServer(function(request, response) {
  homeRoute(request, response)
  //response.end('Hello World\n');
}).listen(4000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4000/');
// 2. Handle HTTP route GET / and POST / HOME
function homeRoute(request, response) {
  // if url == "/" && GET
  if (request.url === "/") {
    // Show search field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n")
    response.write("Search\n")
    response.end("Footer\n")
  }
  // if url == "/" && POST
    // Redirect to UserName
}
// 3. Handle HTTP route GET /:username
function userRoute(request, response) {
  // if url == "/..."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n")
    response.write(username + "\n")
    response.end("Footer\n")
  }
   // get json from Treehouse
    // on "end" (all data has come back)
      // Show profile
    // on "error"
      // Show error
}
// 4. Function that handles the reading and the merging of the data (JSON)
  // Read from file and get a string
    // Merge values into string
