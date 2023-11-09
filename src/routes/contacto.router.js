const { create } = require('../controllers/contacto.controllers');
const express = require('express');

const contactoRouter = express.Router();

contactoRouter.route('/')
    .post(create);

module.exports = contactoRouter;

