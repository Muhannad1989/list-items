// reload modules
const mongoose = require('mongoose');
const http = require('http');
const fs = require('fs');
const express = require('express');
const todoController = require('./controller/todoController');

//fire
const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// fire controller
todoController(app);

// listen to port
const port = 3000;
app.listen(port);
console.log(`you are listening to port ${port}`);
