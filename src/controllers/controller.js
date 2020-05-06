const Cita = require('./../models/cita');
const conection = require('./../config/database');

module.exports = {
    get: (req, res) => {
        res.render('index', { result: {} });
    },
    showMap: (req, res) => {
        res.render('mapa', { mensaje: 'hola ' });
    },
    post: (req, res) => {
        let response = {}
        try {
            console.log(req.body);
            let exists = `select * from Reservaciones where email='${req.body.email}'`;
            conection.query(exists, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                if (result && result.length > 0) {
                    console.log(`error: ${err}`);
                    response.status = "error";
                    response.message = err;
                    res.json({
                        result: response
                    });
                } else {
                    let query = `insert into Reservaciones values(null,'${req.body.nombre}', '${req.body.email}', '${req.body.telefono}')`;
                    // await conection.query(query);
                    conection.query(query, function (err, result) {
                        if (err) throw err;
                        console.log("1 record inserted");
                        console.log("ok");
                        response.status = "success";
                        response.message = "Ok";
                        res.json({
                            result: response
                        });
                    });
                }
            });

        } catch (error) {
            console.log(`error: ${error}`);
            response.status = "error";
            response.message = error;
            res.json({
                result: response
            });
        }
    }
};