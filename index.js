const express = require('express')
const env = require('dotenv')
const app = express()

env.config()


const PORT = process.env.PORT || 5000




app.listen(PORT, () => {
    console.log("Sever Started",PORT)
})
