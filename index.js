const express = require('express');
var request = require('request');
const path = require('path');

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

const app = express();

//Serve the static files from the React App
app.use(express.static(path.join(__dirname, 'client/build')));

//Api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Test openweather api endpoint
app.post('/api/weather', (req,res) => {
    var city = 'Toronto';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9367d971696fc5955624feea1eaf11d7`;
    request(url, function(error,response,body) {
        console.log("Sent json");
        let weather = JSON.parse(body);
        res.render(weather);
        // res.json(JSON.stringify(JSON.parse(body)));
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);