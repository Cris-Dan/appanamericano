require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
require('./database');

//configs
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use('/api/sedes', require('./routes/sedes'));
app.use('/api/comentarios', require('./routes/comentarios'));
app.use('/api/comentariosReportados', require('./routes/comentariosReportados'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/usuariosReportados', require('./routes/usuariosReportados'));
app.use('/api/admins', require('./routes/admins'));
app.use('/api/publicaciones', require('./routes/publicaciones'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//iniciar
app.listen(app.get('port'), () => {
    console.log("servidor en puerto: " + app.get('port'));
});