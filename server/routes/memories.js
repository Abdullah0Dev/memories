const express = require('express')
const {
    getMemories,
    getMemory,
    addMemory,
    deleteMemory,
    updateMemory,
} = require('../controllers/memoryController')

const router = express.Router()
// get all the memories data
router.get('/', getMemories)
// get a single  memory by its id
router.get('/:id', getMemory)

// POST a new memory
router.post('/', addMemory)

// DELETE  a memory
router.delete('/:id', deleteMemory)

// UPDATE A MEMORY
router.put('/:id', updateMemory)

module.exports = router