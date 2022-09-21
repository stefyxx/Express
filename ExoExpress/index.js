// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module
    /*, options*/
) 
module.exports = require("./myServer.js");

//npm init et ok alle domande
//npm install --save express -> in file.js dove creo il mio server : o import express from "express";    o const express = require('express');
//npm install esm
//per avere lo script-punto di start: in 'package.json' -> "scripts": -> aggiungere "start": "node index.js"
//per visualizzare il body di una request in post : npm install body-parse -> in myServer.js -> import bodyparser from "body-parser"; e ANCHE app.use(bodyparser.urlencoded({ extended: true })); CHE BISOGNA METTERE prima di tutti gli app.get or app.post 
//per utilizzare le view -> response.render: npm install ejs -> file.html SARA' file.ejs -> e DEVE ESSERE I NUNA CARTELLA che si chiama 'views'

/*
//Express Sessions - >  npm install express-session --save or npm install --save express-session -> const session = require('express-session');  ET const path = require('path');
/*
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));*/
/* il primo e il secondo x poter estrarre/leggere i dati dal tuo login
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
*/
/*
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
*/


/*MySQL for Node.js -> npm install mysql --save -> const mysql = require('mysql');
dopo aver creato la DB di nome 'nodelogin' -> creo il collegamento:
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});
*/

//in server:
/*
app.get('/about', function(req, res){
  res.render('about.ejs', {
    title: 'About',
     nav: ['Home','About','Contact']
  });
});
*/