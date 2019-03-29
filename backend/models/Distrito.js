const { Schema, model } = require('mongoose');

const DistritoSchema = new Schema({
    nombre: { type: String, required: true }
});

module.exports = model('Distrito',DistritoSchema);