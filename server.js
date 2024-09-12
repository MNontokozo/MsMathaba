// server.js

const express = require('express');
const path = require('path');

// Initialize the app
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
// Define Route 1
app.get('/about', (req, res) => {
  res.render('aboutUs', {title: 'contact us', message: 'Welcome to Express with EJS!' });
});

// Define Contact Us route
app.get('/contact-us', (req, res) => {
  res.render('contactUs' { title: 'contact us', message: 'Welcome to Express with EJS!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
