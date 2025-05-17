const express = require("express");
const router = express.Router();

const tripsController = require('../controllers/trips');

// Route for listing trips and adding a new trip
router.route("/trips")
    .get(tripsController.tripsList) // Get all trips
    .post(tripsController.tripsAddTrip); // Add a new trip

// Route for finding a trip by its code
router.route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) // Get a trip by tripCode
    .put(tripsController.tripsUpdateTrip); // Update a trip by tripCode


module.exports = router;