const express = require('express')
const env = require('dotenv')
const { userRoutes } = require('./routes/UserRoutes.js')
const app = express()

env.config()


const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log("Sever Started", PORT)
})
