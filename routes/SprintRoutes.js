const express = require('express')

const sprintBoardRoutes = express.Router()


//POST
sprintBoardRoutes.route('/').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} added sucessfully`);
})

//GET
sprintBoardRoutes.route('/').get((req, res) => {
    const { name } = req.body
    res.status(200).json({});
})

// GET SINGLE TASK
sprintBoardRoutes.route('/:id').get((req, res) => {
    const { name } = req.body
    res.status(200).json({});
})

//PUT
sprintBoardRoutes.route('/:id').put((req, res) => {
    const { id } = req.params
    res.status(200).json(`${id} Updated sucessfully`);
})

//DELETE
sprintBoardRoutes.route('/:id').post((req, res) => {
    const { name } = req.body
    res.status(200).json(`${name} registered sucessfully`);
})



module.exports = { sprintBoardRoutes }