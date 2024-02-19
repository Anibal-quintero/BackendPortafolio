const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Contacto = sequelize.define('contacto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensaje: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Contacto;