import express from "express";
import bodyparser from "body-parser";
import { myHome, users, timeNow, homePage } from "./helpers";


console.log("Ciao ciao: Server is running");

var app = express();


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));      //per poter visualizzare le img -> la cartella si chiamera 'public' !!!

// View engine setup
app.set('view engine', 'ejs');

app.get('/login', function (request, response) {
    response.render('login', {
        title: 'Login',
    });
});
app.get('/', function (request, response) {
    response.render('login');
});

// 1) Control if you are an our user or not; also if you are admin , you see the current time:
var myRole = '';
//app.post('/', homePage(request,response));

app.post('/', function (request, response) {
    //console.log(request.body);
    const userName = request.body.username;
    const psw = request.body.psw;

    response.contentType('html');
    //////////
    //criptaggio di username et psw:
    const authorizationValue = Buffer.from('userName:psw').toString('base64');

    if (request.headers.Authorization === 'Basic ' + authorizationValue) return '';
    ///////////////
    const finded = users.find(user => { if (userName === user.username && psw === user.psw) return user });
    console.log(finded);
    if (finded !== undefined) {
        myRole = finded.role;
        if (finded.role === 'admin') response.status(200).send(myHome + '<p>' + timeNow + '</p>' + '<a href="http://localhost:3001/admin">List users</a>');
        else {
            response.status(200).render('home', {
                title: 'Home',
                foo: 'bar',
                //nav: ['login', 'home', 'change']
            });
        };
    } else {
        response.status(400).send('<h2 style="color:red;">Login is invalid</h2>' + '<br><a href="http://localhost:3001/">Login</a>');
    }
});

// 2) Only admin see the list of users PROBLEM: non riesco a mantenere il login 

//express.static(root, [opzioni])

app.get('/admin', function (request, response) {
    //console.log(request.body);
    if (myRole === 'admin') {
        response.contentType('application/json');
        response.status(200).send(users);
    } else {
        response.status(403).send('<h2 style="color:red;">KO!! FORBIDDENNN</h2>');
    }
})

//admin modifica momentaneamente il role di un user
function changeRole(req, res) {
    var url_parts = req.url;
    if (url_parts !== undefined) {
        var findUser = url_parts.split("/")[1];
        var a = findUser.split("")[0].toString().toUpperCase();
        var b = a.concat(findUser.substring(1));
        //console.log("c :",changeUser);
        if (myRole === 'admin') {
            res.status(200).send(myHome + '<p>' + timeNow + '</p>' + '<p style="color:green;">Benvenue ' + b + '</p><br>' + '<a href="http://localhost:3001/admin">List users</a>');
        } else {
            res.send('Rien');
        }
    } else {
        res.send('<h1 style="color:red;">What do you want?!</h1>');
    }
}
app.get('/stefania', function (request, response) {
    var url_parts = request.url;
    if (url_parts !== undefined) {
        var findUser = url_parts.split("/")[1];
        var a = findUser.split("")[0].toString().toUpperCase();
        var b = a.concat(findUser.substring(1));
        //console.log("c :",changeUser);
        if (myRole === 'admin') {
            //var parsedUser = users.find(el=>{ el.username.split('@')[0] === findUser; return el});

            response.status(200).send(myHome + '<p>' + timeNow + '</p>' + '<p style="color:green;">Benvenue ' + b + '</p><br>' + '<a href="http://localhost:3001/admin">List users</a>');
        } else {
            response.send('Rien');
        }
    } else {
        response.send('<h1 style="color:red;">What do you want?!</h1>');
    }
})


app.get('/matheo', changeRole);     //il primo parametro é {} !!
app.get('helene',(argA,argB)=>{changeRole(argA,argB)});
//app.get('/helene', changeRole(request, response));
//app.get('/francois', changeRole(request, response));


/*per fare cosde di prova con select c'ho pure:

// pass a local variable to the view
res.render('user', { name: 'Tobi' }, function (err, html) {
  // ...
})

*/




//..............................
var server = app.listen(3001, function () { }); 