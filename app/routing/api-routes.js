// Load data 
var friends = require('../data/friends.js');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));


    // Gets friends data when "friends list" is clicked 
    app.get('/api/friends', function(req, res){
            res.json(friends);
    });

    // Create a new friend
    app.post('/api/friends', function(req, res){
        	friends.push(req.body);
		    res.json(true);
	});
}