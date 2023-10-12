const express = require('express')

const userRoutes = express.Router()


userRoutes.route('/register').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} registered sucessfully`);
})

userRoutes.route('/login').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} login sucessfully`);
})


// export default userRoutes
module.exports = { userRoutes }