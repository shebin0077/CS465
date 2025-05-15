const express = require("express");
const router = express.Router();

const tripsController = require('../controllers/trips');

router.route("/trips")
    .get(tripsController.tripsList);

router.route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode);

router.get('/trips/:code', tripsController.tripsFindByCode);

// In your routes file:


module.exports = router;