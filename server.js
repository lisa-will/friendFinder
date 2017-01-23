// Dependancies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express configuration 
var app = express();
var PORT = 3000;

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
// External routes
app.use(express.static(path.join(__dirname, 'app', 'public')));

// Router
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
    
});
