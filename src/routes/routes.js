const controller = require('./../controllers/controller');

module.exports = app => {
    app.get('/', controller.get);
    app.get('/mapa',controller.showMap);
};