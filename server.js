// SET UP EXPRESS
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path'); // needed for path.resolve
const PORT = process.env.PORT || 3001;
const generateUniqueId = require('generate-unique-id');

// GET NOTES FROM DB.JSON
const { notes } = require('./db/db.json'); 

// MIDDLEWARE FUNCTION TO INCOMING PARSE DATA
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static('public'));


// CREATING A NEW NOTE
function newNote(body, notesArray) {
    const note = body;
    notesArray.push(notes);
    fs.writeFileSync(path.join(__dirname,'./db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

// GET ROUTE FOR NOTES.HTML AND INDEX.HTML
app.get('/',(req, res) => { // this app.get sometimes return syntax error unexpected identifier
    res.sendFile(path.join(__dirname,'./public/index.html'));// // path.resolve(from stack overflow) working
});

app.get('notes',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});

app.get('api/notes', (req, res) => {
    res.json(notes);
});

// POST ROUTES
app.post('api/notes', (req, res) => {
    req.body.id = generateUniqueId();
    const notes = newNote(req.body, notes);
    res.json(notes);
});




// MAKE THE SERVER LISTEN (WITH DIRECT LINK)
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}! http://localhost:3001`);
});





