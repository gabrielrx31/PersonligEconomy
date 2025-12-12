const express = require('express');
const budgetController = require('../controller/budgetController');
const validateBudget = require('../middlewares/validateBudget');

const router = express.Router();

// Hent alle budgetter
router.get('/', budgetController.getAllBudgets);
// Opret et nyt budget
router.post('/', budgetController.createBudget);

module.exports = router;