const { Schema, model } = require('mongoose');

const ComentarioReportadoSchema = new Schema({
    idUsuario_que_reporta: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', required: true
    },
    idComentario: {
        type: Schema.Types.ObjectId,
        ref: 'Comentario', required: true
    },
    fecha: { type: Date, default: Date.now() },
    motivo: { type: String }

});

module.exports = model('ComentarioReportado', ComentarioReportadoSchema);