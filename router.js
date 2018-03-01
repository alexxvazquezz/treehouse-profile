// Functions to route user
const Profile = require('./profile.js');
const renderer = require('./renderer.js');


function home(req, res) {
  if (req.url === "/") {
    res.writeHead(200, {'Content-type': 'text/plain'});
    renderer.view("header", {}, res);
    renderer.view("search", {}, res);
    renderer.view("footer", {}, res);
    res.end();
  }
}

function user(req, res) {
  let username = req.url.replace('/', '');
  if (username.length > 0) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    renderer.view("header", {}, res);
    // Get profile from treehouse
    let userProfile = new Profile(username);
    //on end
    userProfile.on('end', function(profileJSON) {
    //store values
    let values = {
      avatarUrl: profileJSON.gravatar_url,
      username: profileJSON.profile_name,
      badges: profileJSON.badges.length,
      javascriptPoints: profileJSON.points.JavaScript
    }

    // Print simple message
    renderer.view("profile", values, res);
    renderer.view("footer", {}, res);
    res.end();

    });

    //on error
    userProfile.on('error', function(error){
      renderer.view("error", {errorMessage: error.message}, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
      res.end()
    })
  }
}

module.exports.home = home;
module.exports.user = user;
