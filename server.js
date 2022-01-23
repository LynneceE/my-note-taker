// SET UP EXPRESS

const express = require('express');
const app = express();

// MAKE THE SERVER LISTEN
app.listen(3001, () => {
    console.log('API server now on port 3001');
});