const router = require('express').Router();
const localidad = require('../models/localidad');

router.route('/localidades')
    .get((req, res) => {
        localidad.find({}, (err, localidades) => {
            if (err) res.json(err);
            res.json(localidades);
        });
    })
module.exports = router;