// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});