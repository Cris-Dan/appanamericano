const { Schema, model } = require('mongoose');

const UsuarioReportadoSchema = new Schema({
    idUsuario_reportado: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', required: true
    },
    idUsuario_que_reporta: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', required: true
    },
    fecha: { type: Date, default: Date.now() },
    motivo: { type: String }

});

module.exports = model('UsuarioReportado', UsuarioReportadoSchema);