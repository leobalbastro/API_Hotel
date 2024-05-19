const { model, Schema } = require('mongoose')
const { emailRegexp, passwordRegexp } = require('../validators/validator')

const Usuario = new Schema({
    mail: {
        type: String,
        required: [true, 'Se requiere el correo de usuario'],
        validate: {
            validator: (v) => emailRegexp.test(v),
            message: props => `${props.value} no es un correo electronico valido!`
        },
    },
    password: {
        //define que tipo de password se requiere y valida que cumpla la expresion regular
        type: String,
        required: [true, 'Se requiere la contraseña de usuario'],
        validate: {
            validator: (v) => passwordRegexp.test(v),
            message: props => `${props.value} no es un contraseña valida!`
        },
    },
    isEditable: {
        //define si los atributos del usuario creado se puede editar
        type: Boolean,
        default: true,
    },
    isAdmin: {
        //define si el usuario es de tipo admin
        type: Boolean,
        default: false
    },
    userType: {
        // define si el usuario es un cliente vip o un cliente regular
        type: Boolean,
        default: false
    }
})


module.exports = model("Usuario", Usuario)