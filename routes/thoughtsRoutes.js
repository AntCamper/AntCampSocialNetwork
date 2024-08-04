const express = require('express');
const router = express.Router();
const { getAllThoughts, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../controllers/thoughtController');

router.get('/', getAllThoughts);
router.post('/', createThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);

// Routes for reactions
router.post('/:thoughtId/reactions', addReaction);
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
