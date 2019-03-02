require('dotenv').config();
const express = require('express'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controller')

    const app = express(),
    {SERVER_PORT, CONNECTION_STRING, SECRET_SESSION  } = process.env;
    app.use(express.json());
    app.use(sessions({
                secret: SECRET_SESSION,
                resave:false,
                saveUninitialized: true,
                cookie: {maxAge: 1000000000000}
            }))

            massive(CONNECTION_STRING).then(db => {
                app.set('db',db);
                console.log('Data connected, Say not, "I have found the truth," but rather, "I have found a truth." ')
                app.listen(SERVER_PORT, ()=> console.log(`Say not, "I have found the path of the soul." Say rather, "I have met the soul walking upon my path." on ${SERVER_PORT}`))
            })



            app.post('/auth/register', ctrl.register)
            app.post('/auth/login',ctrl.login)
            app.post('/auth/logout', ctrl.destroySession)

            app.get('/api/current', ctrl.getUser)