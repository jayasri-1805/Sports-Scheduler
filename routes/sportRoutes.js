const express = require('express');
const Sport = require('../models/Sport');    
const protect = require('../middleware/authMiddleWare'); 

const router = express.Router();

// Create sport
router.post('/', protect, async (req, res) => {
    try {
        const sport = await Sport.create(req.body);
        res.json(sport);
    } catch (error) {
        res.status(500).json({ message: 'Error creating sport' });
    }
});

// Get all sports
router.get('/', async (req, res) => {
    try {
        const sports = await Sport.find();
        res.json(sports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sports' });
    }
});

module.exports = router;
