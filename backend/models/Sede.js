const { Schema, model } = require('mongoose');

const SedeSchema = new Schema({
    nombre: { type: String, required: true }
});

module.exports = model('Sede',SedeSchema);