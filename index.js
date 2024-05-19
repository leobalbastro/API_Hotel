const express = require('express')
const dbConnection = require('./connections/dbConnection')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();

dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/user', require('./routes/user.routes'))
app.use('/roomReservation', require('./routes/room.routes'))

dbConnection()

app.listen(process.env.PORT, () => {
    console.log(`ejecutando servidor en el puerto ${process.env.PORT}`);
})