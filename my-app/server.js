'use strict';

// load package
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());


const PORT = 8888;
const HOST = '0.0.0.0';

let posts = [];

app.get('/greeting', (req,res) => {

         res.send('hello ');
   });


app.get('/read', (req, res) => {
	res.json(posts);
});

app.post('/create', (req,res) => {
    let postID = req.body.postID;
    let username = req.body.username;
    let text = req.body.text;

    var dateObj = new Date();
    var dateString = dateObj.getMonth() + "-" + dateObj.getDate() + "-" + dateObj.getFullYear();
    var timeString = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
    var timestamp = dateString + " " + timeString;

    posts.push({postID: postID, username: username, text: text, timestamp: timestamp});

    res.json(posts);

    });


app.use('/', express.static('pages'));


app.listen(PORT, HOST);

console.log('up and running');