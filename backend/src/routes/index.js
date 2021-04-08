const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send("Hello World"));

router.post('/register', async (req, res) => {
  //Guardamos al usuario dentro de la base de datos
    const { email, name, password } = req.body; 
    const newUser = new User({email, name, password});
    await newUser.save();
  // Una vez guardado creamos un token
    const token = jwt.sign({_id: newUser._id, name: newUser.name }, 'credenciales')
  // Devolvemos el token al usuario
    res.status(200).json({token, email, name})
});

router.post('/login', async (req, res) => {
  //El usuario introduce sus credenciales que son buscados en la base de datos
  const {email, password } = req.body;
  const user = await User.findOne({email})
  if(!user) return res.status(401).send("El email no existe")
  if(user.password !== password) return res.status(401).send("Contraseña incorrecta");

  const token = jwt.sign({_id: user._id, name: user.name}, 'credenciales');
  return res.status(200).json({token});
  

  
});

//EJEMPLO Ruta pública para poder devolver datos
router.get('/tasks', (req, res) =>{
  res.json([
    {
      _id: '1',
      name: "lorem ipsum",
      description: 'lorem ipsum',
      date: "2021-03-04T11:02:43.765Z"
    },
    {
      _id: '2',
      name: "lorem ipsum",
      description: 'lorem ipsum',
      date: "2024-03-04T11:02:43.765Z"
    },
    {
      _id: '3',
      name: "lorem ipsum",
      description: 'lorem ipsum',
      date: "2021-03-04T17:02:43.765Z"
    }
  ])
});

//EJEMPLO Ruta privada para devolver datos privados
router.get('/private-tasks', verifyToken, (req, res) =>{
  res.json([
    {
      _id: '1',
      name: "lorem ipsum",
      description: 'lorem ipsum',
      date: "2021-03-04T11:02:43.765Z"
    },
    {
      _id: '2',
      name: "lorem ipsum",
      description: 'lorem ipsum',
      date: "2024-03-04T11:02:43.765Z"
    },
    {
      _id: '3',
      name: "lorem ipsum",
      description: 'lorem ipsum',
      date: "2021-03-04T17:02:43.765Z"
    }
  ])
});

//Ruta privada para pedir el nombre del usuario logueado
router.get('/username', verifyToken, (req, res) => {
  var usernameLC = req.userName.toLowerCase()
  res.json(usernameLC);
});

//Validación
 function verifyToken(req, res, next) {
  try {
  //Revisar si en cada petición existe un header llamado "authorization"
    if (!req.headers.authorization) {
      return res.status(401).send('Acceso denegado')
    }
    //Revisar que el token no esté vacío
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Acceso denegado')
    }
    /*Extraer los datos desde el token y lo guardamos en una propiedad llamada "req.userId", para que lo puedan utilizar
    las demás funciones*/
    const payload = jwt.verify(token, 'credenciales')
    if (!payload) {
      return res.status(401).send('Acceso denegado');
    } 
    req.userName = payload.name;
    next();
    
  } catch(e) {
    return res.status(401).send('Acceso denegado');
  }
}

module.exports = router;
