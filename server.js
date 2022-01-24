// SET UP EXPRESS
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
//const PORT = process.env.PORT || 3001;

// GET NOTES FROM DB.JSON
const { notes } = require('./db/db.json'); 

// MIDDLEWARE FUNCTION TO INCOMING PARSE DATA
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// GENERATE UNIQUE ID FROM NPM INSTALLATION
const generateUniqueId = require('generate-unique-id');

// CREATING A NEW NOTE
function newNote()

// GET ROUTE FOR NOTES.HTML
app.get('./public/index.html',(req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/index.html'));// path.resolve(from stack overflow) returns 'path not defined'
});


// MAKE THE SERVER LISTEN (WITH DIRECT LINK)
app.listen(3001, () => {
    console.log('API server now on port 3001 http://localhost:3001');
});






