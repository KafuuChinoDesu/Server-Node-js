const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/////////////////////////////////declarate////////////////////////////////////

let jugador = {
  nombre:'',
  apellido:'',
  score:''
};

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };

////////////////////////////////////default///////////////////////////////////
app.get('/', function (req, res) {
  respuesta = {
      error: true,
      codigo: 200,
      mensaje: 'Punto de inicio'
     };
  res.send(respuesta);
});


/////////////////////////////////////GET//////////////////////////////////////
app.get('/gamer', function (req, res) {
  respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Sin acciones'
     };
  if(jugador.nombre === '' || jugador.apellido === ''|| jugador.score === '') 
  {
    respuesta = {
      error: true,
      codigo: 503,
      mensaje: 'Jugador no ha sido creado',
    };
  } 
  else 
  {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'jugador creado',
      respuesta: jugador
     };
    }
    res.send(respuesta);
});


///////////////////////////////jugador post //////////////////////////// 
app.post('/gamer', function (req, res) {
  if(jugador.nombre !== '' || jugador.apellido !== '' || jugador.score !== '') 
  {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo nombre y apellido son requeridos'
     };
  } 
  else 
  {
    if(req.body.nombre || req.body.apellido || req.body.score) 
    {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: 'El usuario ya fue creado previamente'
       };
    } 
    else 
    {
      jugador = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      score: req.body.score
      };
      respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Jugador creado',
      respuesta: jugador
      };
    }
  }
  res.send(respuesta);
 });


//////////////////////////////////How to use get//////////////////////////////
app.get('/hola', function (req, res){
  res.send('Saludos desde express');
});

//////////////////////////////where the server listens////////////////////////
app.listen(3000, () => {
  console.log('Servidor web escuchando en el puerto 3000');
});