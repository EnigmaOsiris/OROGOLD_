const controller = require('./../controllers/controller');

module.exports = (app,connection) => {
    app.get('/', controller.get);
    app.get('/mapa',controller.showMap);
    app.post('/reservar',controller.post);
};