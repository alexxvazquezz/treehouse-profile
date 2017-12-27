// 1. Handle HTTP route GET / and POST
function home(request, response) {
  // if url === "/" && GET
    if(request.url === "/") {
    // Show Search field
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n")
  }

    // if url === "/" && POST
  // Redirect to /username
}
// 2. Handle HTTP route GET /:username
function user(request, response) {
  // if url === '/...'
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write("Header\n");
    response.write(username + "\n");
    response.end('Footer\n')
    // get json from treehouse
    //on "end"
      // Show profile
    // on "error"
      // show error
   }
  }


module.exports.home = home;
module.exports.user = user;
