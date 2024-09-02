const express = require('express');
const router = express.Router();
const {
  getCounts,
  getBlogCreationDates,
} = require('../controllers/statisticsController');

// Route to get user and blog counts
router.get('/stats/counts', getCounts);

// Route to get blog creation dates
router.get('/stats/blog-creation-dates', getBlogCreationDates);

module.exports = router;
