const userRouter = require('express').Router()
const { loginUsuarios, registrarUsuarios, deleteUsuarios, listaUsuarios, modificarUsuario } = require('../controllers/userController');
const validarJWT = require('../middlewares/JWToken');

userRouter.get('/listUser', validarJWT, listaUsuarios);
userRouter.post('/loginUser', loginUsuarios);
userRouter.post('/createUser', registrarUsuarios);
userRouter.patch('/modifyUser/:id?', validarJWT, modificarUsuario)
userRouter.delete('/deleteUser/:id?', validarJWT, deleteUsuarios)

module.exports = userRouter;