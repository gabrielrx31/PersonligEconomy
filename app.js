const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middlewares/logger');
const validateTransaction = require('./middlewares/validateTransaction');
const validateBudget = require('./middlewares/validateBudget');
const transactionRoutes = require('./routes/transactionRoutes');
const budgetRoutes = require('./routes/budgetRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(logger);

mongoose.connect('mongodb://localhost:27017/personal_finance')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/transactions', transactionRoutes);
app.use('/budgets', budgetRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});