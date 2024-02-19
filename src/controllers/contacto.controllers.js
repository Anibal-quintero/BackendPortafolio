const catchError = require('../utils/catchError');
const Contacto = require('../models/Contacto');
const sendEmail = require('../utils/sendEmail');

const create = catchError(async (req, res) => {
  const result = await Contacto.create(req.body);
  const emailInfo = {
    to: 'oscarzambranozam@gmail.com', // Cambia esto al correo al que deseas enviar la información del formulario
    subject: "Nuevo mensaje desde el portafolio",
    text: `Nombre: ${req.body.nombre}
    \nEmail: ${req.body.email}
    \nMensaje: ${req.body.mensaje}`,
  };
  sendEmail(emailInfo)
    .then(() => {
      return res.status(201).json(result);
    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico:', error);
      return res.status(500).json("Error al procesar la solicitud");
    });
});

module.exports = {
  create,
}
