// le mie costanti
export const myHome = '<nav><ul><li><a href="file:///C:/Users/fabio/Desktop/Stoomlink/ExoExpress/pages/login.html">login</a></li></ul>'+'<h2>Hello word</h2>';
export const timeNow = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
//...................................
// le mie variabili
export var users = [
    {
        username: 'thomas@st.com', //é il login
        psw: '123.4',
        role: 'admin'
    },
    {
        username: 'françois@st.com', //é il login
        psw: '567.8',
        role: 'user'
    },
    {
        username: 'denis@st.com', //é il login
        psw: '912.3',
        role: 'user'
    },
    {
        username: 'helene@st.com', //é il login
        psw: '456.7',
        role: 'user'
    },
    {
        username: 'matheo@st.com', //é il login
        psw: '891.2',
        role: 'user'
    },
    {
        username: 'stefania@st.com', //é il login
        psw: '345.6',
        role: 'user'
    },
];

//................................................
//le mie funzioni:

//ho aggiunto i return per vedere la risposta -> mi dice sempre che non trova script di start ?????
export function homePage(request, response) {
    const timeNow = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
    //console.log(request.body);
    const userName = request.body.username;
    const psw = request.body.psw;
    response.contentType('html');
    const finded = users.find(user => { if (userName === user.username && psw === user.psw) return user });
    //console.log(finded);
    if (finded !== undefined) {
        if (finded.role === 'admin') return response.status(200).send(myHome + '<p>' + timeNow + '</p>');
        else {
            //response.render('home')
            return response.status(200).send(myHome)
        };
    } else {
        return response.status(400).send('<h2 style="color:red;">Login is invalid</h2>')
    }
}  