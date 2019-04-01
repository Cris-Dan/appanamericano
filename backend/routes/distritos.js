const { Router } = require('express');
const router = Router();
const Distritos = require('../models/Distrito');

router.get('/', async (req, res) => {
    const distritos = await Distritos.find();
    res.json(distritos);
});

router.post('/', async (req, res) => {
    const { nombre } = req.body;
    const nuevoDistrito = new Distritos({ nombre });
    await nuevoDistrito.save();
    res.json({ mensaje: 'agregado' });
});

router.delete('/:id', async (req, res) => {
    await Distritos.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'elminado' });
});

module.exports = router;