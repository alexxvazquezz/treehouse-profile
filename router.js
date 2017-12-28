var Profile = require("./profile.js");




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

    // Get Json from treehouse
    var studentProfile = new Profile(username);
    // on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile

      //Store the values which we need
      var values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      //Simple Resonse
      response.write(values.username + " has " + values.badges + " badges\n")
      response.end("Footer\n")
    })

    // on error
    studentProfile.on("error", function(error) {
      // show error
      response.write(error.message + "\n") 
      response.end('Footer\n');
    })

   }
  }


module.exports.home = home;
module.exports.user = user;
