const mongoose = require('mongoose');

//Conexión con la base de datos
mongoose.connect('mongodb+srv://adhago:EyZtZaZOVyCOFm7x@cajerowebcluster.4rcnx.mongodb.net/cajeroweb-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));
