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

//      // req.body hosts is equal to the JSON post sent from the user 
//      var newFriend = req.body;
//      friends.push(newFriend);

//      var totalDifference = 0;
//      var differencesArray = [];

//      // Loop through friends, minus one (current user)
//      for (var i = 0; i < (friends.length - 1); i++){

//          // Loop through the question (q) values 
//          for (var q = 0; q < friends[i].score.length; q++){
//                 totalDifference += Math.abs(friends[i].scores[q] - newFriend.scores[q]);
//          }

//          differencesArray.push(totalDifference);
//          totalDifference = 0;
//          }

//      // Give the smallest value in the array 
//      var bestMatch = friends[differencesArray.indexOf(Math.min.apply(null, differencesArray))];
     
//      res.send(bestMatch);

// });

// }