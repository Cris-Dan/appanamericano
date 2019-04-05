const { Schema, model } = require('mongoose');

const PublicacionSchema = new Schema({
    Titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    idComentario: [{
        type: Schema.Types.ObjectId,
        ref: 'Comentario',
    }],
    imagePath: { type: String },
    ingresado: { type: Date, default: Date.now() }
});

module.exports = model('Publicacion', PublicacionSchema);