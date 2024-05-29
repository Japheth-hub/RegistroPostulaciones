const {Router} = require('express');
const getPortales = require('../controllers/getPortales');
const getRegistro = require('../controllers/getRegistro');
const postPortales = require('../controllers/postPortales');
const postRegistro = require('../controllers/postRegistro');
const deleteRegistro = require('../controllers/deleteRegistro');


const route = Router();

route.get('/portales', getPortales)
route.post('/portales', postPortales)
route.get('/registro', getRegistro)
route.post('/registro', postRegistro)
route.delete('/registro/:id', deleteRegistro)


module.exports = route