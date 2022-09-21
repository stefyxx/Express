
var users = [
    {
        username: 'thomas@stoomlink.com', //é il login
        psw: '123.4',
        role: 'admin'
    },
    {
        username: 'françois@stoomlink.com', //é il login
        psw: '567.8',
        role: 'user'
    },
    {
        username: 'denis@stoomlink.com', //é il login
        psw: '912.3',
        role: 'user'
    },
    {
        username: 'helene@stoomlink.com', //é il login
        psw: '456.7',
        role: 'user'
    },
    {
        username: 'matheo@stoomlink.com', //é il login
        psw: '891.2',
        role: 'user'
    },
    {
        username: 'stefania@stoomlink.com', //é il login
        psw: '345.6',
        role: 'user'
    },
];
//1) controllare il login -> if not ok: status(400).send('<h2 style="color:red;">Login is invalid</h2>') //bad request

//2)if user is admin -> puo' vedere current time -> 
const timeNow = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();

//3) /admin -> accessibile solo ad admin et vede lista utenti .send() !! send NON é possibile in foreach perché posso 1 solo send-> json di lista

//4) solo admin -> /admin/<username>  -> l'admin cambia il tuo role 'momentaneamente' in admin

//...) nella pag Change puoi cambiare il tuo role 'momentaneamente' e ritornare nella pag Home

