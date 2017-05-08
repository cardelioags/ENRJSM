const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
global.config = require('./server/config/const');

//Conexión a la base de datos
const db = require('./server/config/db');

//Carga de nuestras API Routes
const api = require('./server/routes/api');

const app = express();


allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
//Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Puntero a la carpeta estatica
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res, next) => {
    res.header("Access-Controll-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//Configurar nuestras api routes
app.use('/api', api);

//Tomar las demás rutas y regresar index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Tomar el puerto del ambiente y almacenarlo en Express
 */

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Creamos el servidor HTTP
 */

const server = http.createServer(app);

/**
 * Escuchamos en el puerto configurado, en todas las conexiones
 */
server.listen(port,() => console.log(`API corriendo en localhost: ${port}`));
