const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
const validateTransaction = require('./middleware/validateTransaction');
const validateBudget = require('./middleware/validateBudget');

const app = express();

app.use(express.json());
app.use(logger);

mongoose.connect('mongodb://localhost:27017/personal_finance')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    
app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});