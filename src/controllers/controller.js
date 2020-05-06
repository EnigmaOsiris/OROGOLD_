const Cita = require('./../models/cita');

module.exports = {
    get: (req, res) => {
        res.render('index', { mensaje: 'hola ' });
    },
    showMap:(req,res) =>{
        res.render('mapa', { mensaje: 'hola ' });
    }
};