// SET UP EXPRESS
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

// GET NOTES FROM DB.JSON
const { notes } = require('./db/db.json'); 

// MIDDLEWARE FUNCTION TO INCOMING PARSE DATA
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// GENERATE UNIQUE ID FROM NPM INSTALLATION
const generateUniqueId = require('generate-unique-id');



// GET ROUTE FOR NOTES.HTML AND INDEX.HTML
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));// path.resolve(from stack overflow) returns 'path not defined'
});

app.get('notes',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});

app.get('api/notes', (req, res) => {
    res.json(notes);
});

// POST ROUTES
//app.post('')

// CREATING A NEW NOTE
//function newNote()


// MAKE THE SERVER LISTEN (WITH DIRECT LINK)
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! http://localhost:3001`);
});





