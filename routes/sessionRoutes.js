const express = require('express');
const Session = require('../models/Session');
const protect = require('../middleware/authMiddleWare');

const router = express.Router();

// Create session
router.post('/', protect, async (req, res) => {
    try {
        const session = await Session.create({ ...req.body, createdBy: req.user._id });
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: 'Error creating session' });
    }
});

// Get all sessions
router.get('/', async (req, res) => {
    const sessions = await Session.find().populate('sport').populate('createdBy', 'name');
    res.json(sessions);
});

module.exports = router;
