// SET UP EXPRESS
const fs = require('fs');
const express = require('express');
const app = express();

// GENERATE UNIQUE ID FROM NPM INSTALLATION
const generateUniqueId = require('generate-unique-id');



// GET ROUTE FOR NOTES.HTML
app.get('/', (req, res) => {
    res.send('Hello World');
});

// MAKE THE SERVER LISTEN
app.listen(3001, () => {
    console.log('API server now on port 3001 http://localhost:3001');
});






