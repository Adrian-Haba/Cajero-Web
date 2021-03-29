const mongoose = require('mongoose');

//Conexión con la base de datos
mongoose.connect('mongodb://localhost/cajeroweb-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));
