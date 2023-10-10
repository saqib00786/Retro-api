const express = require('express')

const userRoutes = express.Router()


userRoutes.route('/login').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} registered sucessfully`);
})


// export default userRoutes
module.exports = { userRoutes }