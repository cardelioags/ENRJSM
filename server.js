const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
global.config = require('./server/config/const');

//Conexión a la base de datos
const db = require('./server/config/db');

//Carga de nuestras API Routes
const usuarioRoutes = require('./server/routes/usuario');
const personaRoutes = require('./server/routes/persona');
const bearRoutes = require('./server/routes/bear');
const entidadRoutes = require('./server/routes/entidad');
const municipioRoutes = require('./server/routes/municipio');
const localidadRoutes = require('./server/routes/localidad');


const app = express();


allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
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

//Configurar nuestras api routes
app.use('/api', [
  personaRoutes, 
  usuarioRoutes, 
  bearRoutes, 
  entidadRoutes,
  municipioRoutes,
  localidadRoutes
  ]);

//Tomar las demás rutas y regresar index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Tomar el puerto de variable de entorno o en su defecto definirlo y almacenarlo en Express
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
server.listen(port,() => console.log(`Servidor corriendo en localhost: ${port}`));
