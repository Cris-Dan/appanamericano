const { Router } = require('express');
const router = Router();
const Sedes = require('../models/Sede');

router.get('/', async (req, res) => {
    const sede = await Sedes.find();
    res.json(sede);
});

router.post('/', async (req, res) => {
    const { nombre } = req.body;
    const nuevaSede = new Sedes({ nombre });
    await nuevaSede.save();
    res.json({ mensaje: 'agregado' });
});

router.delete('/:id', async (req, res) => {
    await Sedes.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'elminado' });
});

module.exports = router;