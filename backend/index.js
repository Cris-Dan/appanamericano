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
app.use('/api/distritos',require('./routes/distritos'));


//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//iniciar
app.listen(app.get('port'), () => {
    console.log("servidor en puerto: " + app.get('port'));
});