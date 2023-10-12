const express = require('express')

const taskRoutes = express.Router()


//POST
taskRoutes.route('/').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} added sucessfully`);
})

//GET
taskRoutes.route('/').get((req, res) => {
    const { name } = req.body
    res.status(200).json({});
})

// GET SINGLE TASK
taskRoutes.route('/:id').get((req, res) => {
    const { name } = req.body
    res.status(200).json({});
})

//PUT
taskRoutes.route('/:id').put((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} registered sucessfully`);
})

//DELETE
taskRoutes.route('/:id').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} registered sucessfully`);
})



module.exports = { taskRoutes }