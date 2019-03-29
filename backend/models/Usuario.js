const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true },
    nombre_usuario: { type: String, required: true },
    password_usuario: { type: String, required: true },
    sexo: { type: String, required: true },
    cantidad_comentarios_indebidos: { type: Number, default: 0 }

});

module.exports = model('Usuario', UsuarioSchema);