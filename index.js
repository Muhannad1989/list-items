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

// //////////////// reading and writing part stream and pipe then display it on html page ////////////////////////////////////
// const server = http.createServer((req, res) => {
//   if (req.url === '/home' || req.url === '/') {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     // fs.createReadStream(__dirname + '/readMe.text', 'utf8').pipe(res);
//     res.end('any text');
//   }
//   if (req.url === '/obj') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     const student = { name: 'jan', age: 45 };
//     // fs.createReadStream(__dirname + '/readMe.text', 'utf8').pipe(res);
//     res.write({ item: student });
//   }
// });
// const port = 5000;
// server.listen(port, () => {
//   console.log(`connect on port ${port}`);
// });

// ///////////////////////////////////////////////////////////////////////////////

// mongoose.connect('add url from your user account on Mlab to connect with this data');
// const data = [{ item: 'get milk', item: 'go sleep', item: 'close the door' }];
// app.set('view engine', 'ejs');
// app.use(express.static('/public'));

// ///////////////////////read and write sync and async ////////////////////////////////////////

// fs.appendFile('./text.txt', ' text ', err => {
//   if (err) throw err;
//   const before = fs.readFile('./text.txt', 'utf8', (err, data) => {
//     console.log(before);
//   });
//   const after = fs.readFile('./text.txt', 'utf8', (err, data) => {
//     console.log(after);
//   });
// });

// fs.writeFileSync('./writeMe.txt', 'nice');

// var fs = require('fs');

// function readFiles(files, callback) {
//   var filesLeft = files.length;
//   var contents = {};
//   var error = null;

//   var processContent = function(filePath) {
//     return function(err, data) {
//       // an error was previously encountered and the callback was invoked
//       if (error !== null) {
//         return;
//       }

//       // an error happen while trying to read the file, so invoke the callback
//       if (err) {
//         error = err;
//         return callback(err);
//       }

//       contents[filePath] = data;

//       // after the last file read was executed, invoke the callback
//       if (!--filesLeft) {
//         callback(null, contents);
//       }
//     };
//   };

//   files.forEach(function(filePath) {
//     fs.readFile(filePath, processContent(filePath));
//   });
// }

// //////////////////get the longest word ////////////////////////////////
// const arr = ['nice job', 'wonderful', 'awesome'];
// const newArr = [];
// arr.forEach(element => {
//   newArr.push(element.length);
// });

// console.log(Math.max(...newArr));

// ////////////////////////////////////////
