require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
const cors = require('cors');

//INFORMACIÓN DEL ARCHIVO ENV
const {USER,PASS} = process.env;


// ACEPTAR JSON Y URLENCODED
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS
app.use(cors({
    origin: 'http://localhost:4200', // Origen permitido
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
    credentials: true // Habilitar el intercambio de cookies en las solicitudes CORS
}));

//PARA CARGAR ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//RUTAS PRINCIPAL
app.get('/', function(req, res) {
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
   
    const { MailMessage } = require('./public/js/mail/mail.js');

    const   now         = new Date(),
            day         = now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`,
            month       = now.getMonth() + 1  > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1 }`,
            currentDate = `${day}/${month}/${now.getFullYear()}`;

    const { name, email,phone, message } = req.body;

    const mailOptions = {
        from    : USER,
        to      : 'salazar199925@gmail.com',
        subject : 'Envio de correo de contacto',
        html    : MailMessage({name, email, phone, message,currentDate,cid:'firm'}),
        attachments: [{
            filename: 'background.jpg',
            path: './public/img/mail/background.jpg',
            cid: 'firm'
        }]
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) return res.status(500).send({send:false,msg:'Error al enviar el correo electrónico'});
        res.send({send:true,msg:'Correo electrónico enviado correctamente'});
    });

});


//SINO ENCUENTRA NINGUNA RUTA ANTERIOR
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'error.html'));
});


//CORRE EL SERVIDOR
app.listen(3000, function() {
    console.log('Servidor iniciado en el puerto 3000');
});

