const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', required: true
    },
    comentario: { type: String, required: true },
    fecha: { type: Date, default: Date.now() },

});

module.exports = model('Comentario', ComentarioSchema);