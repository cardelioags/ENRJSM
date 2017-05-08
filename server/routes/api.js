const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Bear = require('../models/bear');

/**
 * GET lista de api
 */
router.get('/', (req, res) => {
    res.send('El api funciona');
})


/**
 * Rutas para osos
 */
router.route('/bears')
    .post((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        var bear = new Bear();
        bear.name = req.body.name;

        bear.save((err, bear) => {
            if (err) res.sendStatus(err);
            res.json(bear);
        });
    })
    .get((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        Bear.find((err, bears) => {
            if (err) {
                res.sendStatus(err);
            }
            res.json(bears);
        })
    });

router.route('/bears/:bear_id')
    .get((req, res) => {
        Bear.findById(req.params.bear_id, (err, bear) => {
            if (err) res.sendStatus(err);
            res.json(bear);
        })
    })
    .put((req, res) => {
        Bear.findById(req.params.bear_id, (err, bear) => {
            if (err) res.sendStatus(err);

            bear.name = req.body.name;

            bear.save((err) => {
                if (err) res.sendStatus(err);
                res.json({ message: 'Bear updated!!' })
            });
        })
    })
    .delete((req, res) => {
        var tmpBear = Bear.findById(req.params.bear_id, (err, bear) => {
            return JSON.stringify(bear);
        });
        Bear.remove({ _id: req.params.bear_id }, (err, bear) => {
            if (err) res.sendStatus(err);
            res.json({ message: `Bear is successfully deleted` });
        })
    });

/**
 * Rutas para personas
 */

const Persona = require("../models/persona")

// /api/personas
router.route('/personas')
    .get((req, res) => {
        Persona.find((err, personas) => {
            if (err) res.sendStatus(err);
            res.json(personas);
        })
    })
    .post((req, res) => {
        var persona = new Persona();

        for (var key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                persona[key] = req.body[key];
            }
        }
        persona.save((err, persona) => {
            if (err) res.sendStatus(err);
            res.json(persona);
        });
    })

// /api/persona
router.route('/personas/:id')
    .delete((req, res) => {
        Persona.remove({ _id: req.params.id }, (err, status) => {
            if (err) res.sendStatus(err);
            res.json({
                mensaje: `Se eliminaron ${status.result.n} personas`,
                status: status
            });
        });
    })

/**
 * Llamada al modelo Usuario
 * Rutas para usuarios
 */
const Usuario = require('../models/usuario');

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

router.route('/usuarios/register')
    .post((req, res) => {
        usuario = new Usuario({
            usuario: req.body.usuario,
            password: req.body.password
        });
        usuario.save((err, usuario) => {
            if (err) res.sendStatus(err);
            res.json(usuario);
        })
    });
router.route('/usuarios/:id')
    .get((req, res) => {
        Usuario.findOne({ _id: req.params.id }, (err, usuario) => {
            if (err) res.sendStatus(err);
            res.json(usuario);
        })
    })
    .post((req, res) => {
        Usuario.update({ _id: req.params.id }, { $set: { password: req.body.password, usuario: req.body.usuario } }, (err, result) => {
            if (err) res.sendStatus(err);
            res.json(result);
        });
    });

module.exports = router;