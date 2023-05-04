require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
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


//ENVIO DE CORREO
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:USER,
    pass:PASS
  }
});

app.post('/sendMail', (req, res) => {
   
    const { name, email,phone, message } = req.body;

    const mailOptions = {
        from    : USER,
        to      : 'salazar199925@gmail.com',
        subject : 'Envio de correo de contacto',
        text    : `Nombre: ${name}, Email: ${email}, Telefono: ${phone}, Mensaje: ${message}`,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) return res.status(500).send({send:false,msg:'Correo electrónico enviado correctamente'});
        res.send({send:true,msg:'Correo electrónico enviado correctamente'});
    });

});


//SINO ENCUENTRA NINGUNA RUTA ANTERIOR
app.use((req, res) => {
    const { NotFound } = require('./public/js/error/notFound.js');
    res.status(404).send(NotFound());
});


//CORRE EL SERVIDOR
app.listen(PORT, function() {
    console.log('Servidor iniciado en el puerto 3000');
});

