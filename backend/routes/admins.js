const { Router } = require('express');
const router = Router();
const Admins = require('../models/Admin');
const jwt = require('jsonwebtoken');

router.post('/autenticacion', async (req, res) => {
    const admin = await Admins.findOne({
        usuario_admin: req.body.usuario_admin,
    });
    if (!admin) {
        res.json({ mensaje: 'Usuario no encontrado' });
    } else {
        if (admin.password_admin != req.body.password_admin) {
            res.json({ mensaje: "Password erronea" });
        } else {
            const token = jwt.sign({ admin }, process.env.SECRET);
            res.json(token);
        }
    }
});

router.post('/', async (req, res) => {
    const admin = await Admins.findOne({
        usuario_admin: req.body.usuario_admin,
    });
    if (admin) {
        res.json({ mensaje: 'EL usuario ya existe' });
    } else {
        const { usuario_admin, password_admin } = req.body;
        const nuevoAdmin = new Admins({ usuario_admin, password_admin });
        await nuevoAdmin.save();
        res.json({ mensaje: 'administrador registrado' });
    }
});

router.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: "autorizacion fallida" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }else{
        res.status(403).send({
            mensaje:'no existe token'
        });
    }
});

router.get('/', async (req, res) => {
    const admins = await Admins.find();
    res.json(admins);
});


module.exports = router;