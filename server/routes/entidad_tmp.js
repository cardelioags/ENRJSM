const router = require('express').Router();
const entidad = require('../models/entidad');

router.route('/entidades')
    .get((req, res, next)=>{
        entidad.find({},{'municipios.localidades':0}, (err, entidades)=>{
            if(err) res.json(err);
            res.json(entidades);
        })
    });

module.exports = router;