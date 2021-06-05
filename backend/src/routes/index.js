const { Router, response } = require('express');
const router = Router();

const User = require('../models/User');
const Account = require('../models/Account');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send("Hello World"));

router.post('/register', async (req, res) => {
  //Guardamos al usuario dentro de la base de datos
    const { email, name, password } = req.body; 
    const newUser = new User({email, name, password });
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

router.post('/createaccount', verifyToken, async (req, res) => {
  //Guardamos la cuenta en la base de datos
  const { name_account, balance, userId = req.userId } = req.body;
  const user = await User.findById(userId); 
  const newAccount = new Account({
    name_account, 
    balance,
    user: user._id
  })

  try {
    const savedAccount = await newAccount.save()
    user.account = user.account.concat(savedAccount._id)
    await user.save()

    res.json(savedAccount)
  }catch (error) {
    next(error)
  }
});

//Recuperar todos los usuarios
router.get('/users', async (req, res) => {
  const users = await User.find({})
  res.json(users)
});

//Recuperar todas las cuentas bancarias
router.get('/accounts', async (req, res) => {
  const accounts = await Account.find({})
  res.json(accounts)
});

//Ruta privada para pedir el nombre del usuario logueado
router.get('/username', verifyToken, (req, res) => {
  var usernameLC = req.userName.toLowerCase()
  res.json(usernameLC);
});

//Ruta privada para pedir la cuenta de banco del usuario
router.get('/account', async (req, res) => {
  const infouser = await User.findOne({}).populate('account', {
    _id: 0,
    name_account: 1
  })
  name_account = infouser.account[0]
  account = name_account.name_account

  res.json(account)
})

//Ruta privada para pedir el saldo de la cuenta para confirmar si se puede eliminar o no
router.get('/showbalance', async (req, res) => {
  const infouser = await User.findOne({}).populate('account', {
    _id: 0,
    balance: 1
  })
  balance = infouser.account[0]
  accountBalance = balance.balance
  res.json(accountBalance)
})

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
    req.userId = payload._id;
    req.userName = payload.name;
    req.accountId = payload.account;
    next();
    
  } catch(e) {
    return res.status(401).send('Acceso denegado');
  }
}

module.exports = router;
