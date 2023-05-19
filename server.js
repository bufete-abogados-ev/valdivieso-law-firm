require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const app = express();
const path = require('path');

//INFORMACIÓN DEL ARCHIVO ENV
const {USER,PASS,PORT} = process.env;


// ACEPTAR JSON Y URLENCODED
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//PARA CARGAR ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


//RUTAS PARA CARGAR LAS VISTAS
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/team', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/clients', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



//ENVIO DE CORREO
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:USER,
    pass:PASS
  }
});

app.post('/sendMail', (req, res) => {

    return res.send({send:false,msg:'Desactivado temporalmente'});
   
    const { MailMessage } = require('./public/js/mail/mail.js');

    const   now         = new Date(),
            day         = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`,
            month       = now.getMonth() + 1  > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1 }`,
            currentDate = `${day}/${month}/${now.getFullYear()}`;
  
    const { name, email,phone, message } = req.body;

    const mailOptions = {
        from    : USER,
        to      : '',
        subject : 'Envio de correo de contacto',
        html    : MailMessage({name, email, phone, message,currentDate,cid:'firm'}),
        attachments: [{
            filename: 'background.jpg',
            path: './public/img/mail/background.jpg',
            cid: 'firm'
        }]
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) return res.status(500).send({send:false,msg:'Por favor intente nuevamente'});
        res.send({send:true,msg:'Correo electrónico enviado correctamente'});
    });

});


//SINO ENCUENTRA NINGUNA RUTA ANTERIOR
app.use((req, res) => {
    const { NotFound } = require('./public/js/error/notFound.js');
    res.status(404).send(NotFound());
});


//CORRE EL SERVIDOR
app.listen(3000, function() {
    console.log('Servidor iniciado en el puerto 3000');
});

