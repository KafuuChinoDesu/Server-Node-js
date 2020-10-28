const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/////////////////////////////////declarate////////////////////////////////////
var url = '/jugador';

let jugador = {
  posicio:'',
  alies:'',
  nom:'',
  cognom:'',
  score:''
};

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
 };

 let ranking = {
 nombreJugadors: 3,
   jugadors: [{
    posicio:'1',
    alies:'tempo',
    nom:'David',
    cognom:'Vera',
    score:'1000'
  },
  {
    posicio:'2',
    alies:'andreseins',
    nom:'Marco',
    cognom:'Naula',
    score:'950'
  },
  {
    posicio:'3',
    alies:'milo',
    nom:'Irvin',
    cognom:'Alvarez',
    score:'850'
  }
 ]
 }
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

app.get('/ranking', function (req, res) {
  ranking = {
    nombreJugadors: 3,
      jugadors: [{
       posicio:'1',
       alies:'tempo',
       nom:'David',
       cognom:'Vera',
       score:'1000'
     },
     {
       posicio:'2',
       alies:'andreseins',
       nom:'Marco',
       cognom:'Naula',
       score:'950'
     },
     {
       posicio:'3',
       alies:'milo',
       nom:'Irvin',
       cognom:'Alvarez',
       score:'850'
     }
    ]
    }
    res.send(ranking);
});
///GET alias
app.get('/jugador/andreseins', function (req, res) {
    jugador = {
      posicio:'2',
      alies:'andreseins',
      nom:'Marco',
      cognom:'Naula',
      score:'950'
    }
    res.send(jugador);
});
app.get('/jugador/milo', function (req, res) {
  jugador = {
    posicio:'3',
    alies:'milo',
    nom:'Irvin',
    cognom:'Alvarez',
    score:'850'
  }
  res.send(jugador);
  });
app.get('/jugador/tempo', function (req, res) {
  jugador = {
    posicio:'1',
    alies:'tempo',
    nom:'David',
    cognom:'Vera',
    score:'1000'
  }
  res.send(jugador);
});

app.get(url, function (req, res) {
  respuesta = {
    error: true,
    codigo: 504,
    mensaje: 'El jugador no exite',
  }
  res.send(respuesta);
});
/*
if(req === 'tempo')
{
  jugador = {
    posicio:'1',
    alies:'tempo',
    nom:'David',
    cognom:'Vera',
    score:'1000'
  }
}
else{
  if(req === 'milo')
  {
    jugador = {
      posicio:'3',
      alies:'milo',
      nom:'Irvin',
      cognom:'Alvarez',
      score:'850'
    }
  }
}*/
///////////////////////////////jugador post //////////////////////////// 
app.post('/gamer', function (req, res) {
  if(jugador.nombre !== '' || jugador.apellido !== '' || jugador.score !== '' || jugador.alies !== '' || jugador.posicio !== '') 
  {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo alias, numero y resultado son requeridos'
     };
  } 
  else 
  {
    if(req.body.nombre || req.body.apellido || req.body.score || req.body.alies || req.body.posicio) 
    {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: 'El jugador ya existe'
       };
    } 
    else 
    {
      jugador = {
      alies: req.body.alies,
      posicio: req.body.posicio,
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