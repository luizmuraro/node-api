const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello Ronaldo!')
});


app.listen(3001);