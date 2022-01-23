// SET UP EXPRESS
const fs = require('fs');
const express = require('express');
const app = express();

// MIDDLEWARE FUNCTION TO INCOMING PARSE DATA
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// GENERATE UNIQUE ID FROM NPM INSTALLATION
const generateUniqueId = require('generate-unique-id');



// GET ROUTE FOR NOTES.HTML
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));// path.resolve(from stack overflow) returns 'path not defined'
});

// MAKE THE SERVER LISTEN (WITH DIRECT LINK)
app.listen(3001, () => {
    console.log('API server now on port 3001 http://localhost:3001');
});






