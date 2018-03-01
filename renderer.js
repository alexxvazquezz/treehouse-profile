const fs = require('fs');

function view(template, values, res) {
  // Read from template files
  var fileContents = fs.readFileSync(`./views/${template}.html`);
  //insert values

  // Write out values
  res.write(fileContents);
}

module.exports.view = view;
