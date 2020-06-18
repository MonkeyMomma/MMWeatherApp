// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');

// Middleware
// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//  Initialize the main project folder
app.use(express.static('website'));
app.use(express.json());

// Set up the server
const port = 8080;

// Callback to debug
const server = app.listen(port, () => {
    console.log('server running');
    console.log(`running on localhost: ${port}`)
});

// Initialize all routes with a callback function



// Post Route
app.post('/api', (req, res) => {
    res.send('weather data received');
    projectData = req.body;
    console.log(projectData);
});

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
})
