const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', required: true },
    date: String,
    time: String,
    venue: String,
    teamA: [String],
    teamB: [String],
    additionalPlayers: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Session', sessionSchema);
