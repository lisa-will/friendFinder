var path = require('path');

module.exports = function(app){

    // Basic route that sends the user first to the AJAX 
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
    })

    // Sends user to survey page 
    app.get('/survey', function(req, res){

        res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
    })
};