const { Router } = require('express');

const cidadeController = require('../app/controllers/cidade');
const clienteController = require('../app/controllers/cliente');

const route = Router();

route.get('/cidades', cidadeController.index);
route.post('/cidades', cidadeController.store);
route.put('/cidades/:id', cidadeController.update);
route.delete('/cidades/:id', cidadeController.delete);

route.get('/clientes', clienteController.index);
route.get('/clientes/:id', clienteController.get);
route.post('/clientes', clienteController.store);
route.put('/clientes/:id', clienteController.update);
route.delete('/clientes/:id', clienteController.delete);

module.exports = route;