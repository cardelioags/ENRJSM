const router = require('express').Router();
const municipio = require('../models/municipio');

router.route('/municipios')
    .get((req, res) => {
        municipio.find({})
        .populate('CVE_ENT')
        .exec((err, municipios) => {
            if (err) res.json(err);
            res.json(municipios);
        });
    })
module.exports = router;