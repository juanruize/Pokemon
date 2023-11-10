const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getTypesHandler = require ("../handlers/typeHandler")


const typeRouter = Router();



typeRouter.get("/", getTypesHandler)

module.exports = typeRouter;