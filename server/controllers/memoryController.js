const mongoose = require('mongoose')
const Memories = require('../models/memoriesModel')

// get all memories
const getMemories = async (req, res) => {
    const memory = await Memories.find({}).sort({ createdAt: -1 }) // the new
    res.status(200).json(memory); // return the results
}

// get a single  memory by its id
const getMemory = async (req, res) => {
    const { id } = req.params
    // check if the id is right
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not a valid ID' })
    }
    // make the action
    const memory = await Memories.findById(id)
    // Check if a real memory data
    if (!memory) {
        return res.status(404).json({ error: 'NO such Memory' })
    }
    res.status(200).json(memory)
}
// Create/Add a new workout
const addMemory = async (req, res) => {
    // get the data body with req.body
    const { title, image, desc } = req.body
    // add the data to the DB
    try {
        const memory = await Memories.create({ title, image, desc })
        res.status(200).json(memory)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a memory

const deleteMemory = async (req, res) => {
    const { id } = req.params
    // check if it is a valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such ID'})
      }
    // delete | ensure that _id: is the same as the id
    const memory = await Memories.findByIdAndDelete({ _id: id })
    // ensure got memory
    if (!memory) {
        return res.status(400).json({ error: "No such memory." });
    }
    // return the json data
    res.status(200).json(memory)

}

// update a memory

const updateMemory = async (req, res) => {
    const { id } = req.params
    // check if it's a valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'not valid id' })
    }
    // initialize the data and ensure that the _id is the same as id
    // and give it the all body data which is the title, image....
    const memory = Memories.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })
    // ensure there is a real data
    if (!memory) {
        res.status(404).json({ error: 'no such memory' });
    }
    // if no errors just return it as a json format
    res.status(200).json(memory)
}

// export models

module.exports = {
    getMemories,
    getMemory,
    addMemory,
    deleteMemory,
    updateMemory,
}