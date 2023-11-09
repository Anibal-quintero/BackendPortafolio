const express = require('express');
const contactoRouter = require('./contacto.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/contacto', contactoRouter)


module.exports = router;