

const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Use the Trip model directly

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec(); // Use the Trip model directly
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }
        return res.status(200).json(trips); // Return the list of trips
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const trips = await Trip.find({
            'code':req.params.tripCode
        }).exec(); // Use the Trip model directly
        if (!trips ) {
            return res.status(404).json(err);
        }
        return res.status(200).json(trips); // Return the list of trips
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};