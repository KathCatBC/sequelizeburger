var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var burgersController = require("./controllers/burgers_controller.js");

app.use("/", burgersController);

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
  });
});
