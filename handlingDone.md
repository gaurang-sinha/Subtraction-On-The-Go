steps to access the project

1. install node (https://nodejs.org/en/download/)
2. npm install -  to update the node modules in the project
3. start the server with 'nodemon index.js'
4. nodejs request to hit on the postman :-
    var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'http://localhost:3000/getSub?minuend=6&numOfQuestions=4&subtrahend=5&borrowFlag=1',
    'headers': {
    }
    };
    request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    });
