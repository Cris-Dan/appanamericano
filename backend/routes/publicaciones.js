const { Router } = require('express');
const path = require('path');
const router = Router();
const Publicaciones = require('../models/Publicacion');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }, fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return (null, true);
        }
        cb("error: el archivo debe ser una imagen valida");
    }
});
//middlewares
const upload = (multer({ storage }).single('image'));


module.exports = router;