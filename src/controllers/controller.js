const Cita = require('./../models/cita');
const conection = require('./../config/database');

module.exports = {
    get: (req, res) => {
        res.render('index', { result: {} });
    },
    showMap:(req,res) =>{
        res.render('mapa', { mensaje: 'hola ' });
    },
    post: async (req,res)=>{
        let response={}
        try {
            console.log(req.body);            
            let query=`insert into Reservaciones values(null,'${req.body.nombre}', '${req.body.email}', '${req.body.telefono}')`;
            conection.query(query);
            console.log("ok");
            response.status="success";
            response.message="Ok";            
        } catch (error) {
            console.log(`error: ${error}`);
            response.status="error";
            response.message=error;            
        }
        res.render("index", {
            result:response
        });
        
    }
};