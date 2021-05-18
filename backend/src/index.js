const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log('server started on port', port))

//app.listen(3000);
//console.log('Server on port', 3000);
