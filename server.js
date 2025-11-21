const express = require("express");
const path = require("path");
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory where the EJS templates are stored
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to Express with EJS!' });
});

// Define About route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About us', message: 'Welcome to Express with EJS!' });
});

// Define Contact Us route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact us', message: 'Welcome to Express with EJS!' });
});

// Export the app for Vercel
module.exports = app;
