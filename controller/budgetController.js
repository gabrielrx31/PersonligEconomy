const budgetModel = require('../model/budgetModel');

//Opret et nyt budget
exports.createBudget = async (req, res) => {
    try {
        const budget = new budgetModel(req.body);
        await budget.save();
        res.status(201).json(budget);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Hent alle budgetter
exports.getAllBudgets = async (req, res) => {
    try {
    const budgets = await budgetModel.find();
    res.status(200).json(budgets);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

