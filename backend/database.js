const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/appanamericanodb', {
    useNewUrlParser: true
}).then(db => console.log('base de datos conectada')).catch(err => console.log(err));
