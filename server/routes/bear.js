const router = require('express').Router();
const jwt = require('jsonwebtoken');
let jwtVer = require('../middlewares/jwt.middleware');

const Bear = require('../models/bear');

/**
 * Rutas para osos
 */

//Operaciones con osos
router.route('/bears')
    //Alta de osos
    .post(jwtVer,(req, res, next) => {

        var bear = new Bear();
        bear.name = req.body.name;

        bear.save((err, bear) => {
            if (err) res.sendStatus(err);
            res.json(bear);
        });
    })
    //Consulta la lista de osos
    .get(jwtVer, (req, res, next) => {

        Bear.find((err, bears) => {
            if (err) {
                res.sendStatus(err);
            }
            res.json(bears);
        })
    });

//Operaciones con un oso
router.route('/bears/:bear_id')
    //Consulta
    .get((req, res) => {
        Bear.findById(req.params.bear_id, (err, bear) => {
            if (err) res.sendStatus(err);
            res.json(bear);
        })
    })
    //Edición
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
    //Eliminación
    .delete((req, res) => {
        var tmpBear = Bear.findById(req.params.bear_id, (err, bear) => {
            return JSON.stringify(bear);
        });
        Bear.remove({ _id: req.params.bear_id }, (err, bear) => {
            if (err) res.sendStatus(err);
            res.json({ message: `Bear is successfully deleted` });
        })
    });

module.exports = router;