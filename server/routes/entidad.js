const router = require('express').Router();
const entidad = require('../models/entidad');

router.route('/entidades')
    .get((req, res) => {
        entidad.find({}, (err, entidades) => {
            if (err) res.json(err);
            res.json(entidades);
        });
    })
module.exports = router;