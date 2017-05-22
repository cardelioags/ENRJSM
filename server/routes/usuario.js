const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
let jwtVer = require('../middlewares/jwt.middleware');


/**
 * Llamada al modelo Usuario
 * Rutas para usuarios
 */
const Usuario = require('../models/usuario');

//Autenticación
router.route('/usuarios/login')
    .post((req, res) => {
        Usuario.findOne({ usuario: req.body.usuario }, (err, usuario) => {
            if (err) sendStatus(err);

            if (!usuario) {
                res.json({ message: 'Usuario inexistente' });
            } else {
                var isValid = usuario.authenticate(req.body.password);
                if (!isValid) {
                    res.json({ message: 'Contraseña incorrecta' });
                } else {
                    let token = jwt.sign(usuario, global.config.jwtSecret, {
                        expiresIn: 1440 //expira en una hora
                    });
                    res.json({ usuario: usuario.usuario, token: token });
                }
            }

        });
    });

//Consulta de usuarios
router.route('/usuarios')
    .get()

//Registro de usuarios
router.route('/usuarios/register')
    .post((req, res) => {
        usuario = new Usuario({
            usuario: req.body.usuario,
            password: req.body.password
        });
        usuario.save((err, usuario) => {
            if (err) {
                console.log(err);
                res.json(err);
            }
            res.json(usuario);
        })
    });

//Operaciones con usuarios individuales
router.route('/usuarios/:id')
    //Consulta
    .get((req, res) => {
        Usuario.findOne({ _id: req.params.id }, (err, usuario) => {
            if (err) res.sendStatus(err);
            res.json(usuario);
        })
    })
    //Actualización
    .put((req, res) => {
        Usuario.update({ _id: req.params.id }, { $set: { password: req.body.password, usuario: req.body.usuario } }, (err, result) => {
            if (err) res.sendStatus(err);
            res.json(result);
        });
    })
    //Eliminación
    .delete((req, res) => {
        Usuario.remove({ _id: req.params.id }, (err, result) => {
            if(err) res.sendStatus(err);
            res.json(result);
        })
    });

module.exports = router;