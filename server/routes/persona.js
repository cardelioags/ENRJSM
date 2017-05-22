const router = require('express').Router();
const jwt = require('jsonwebtoken');
let jwtVer = require('../middlewares/jwt.middleware');

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
            if (err) res.json(err);
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

module.exports = router