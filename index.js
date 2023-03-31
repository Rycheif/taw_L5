const express = require('express');
const questions = require('./questions').questions;
const config = require('./config').config;

const app = express();

app.get('/api/questions', (req, res) => {
    res.send(questions);
});

app.listen(config.port, () => {
    console.info(`Server is running on port 3000`);
});
