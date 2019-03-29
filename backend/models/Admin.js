const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    usuario_admin: { type: String, required: true },
    password_admin: { type: String, required: true }

});

module.exports = model('Admin', AdminSchema);