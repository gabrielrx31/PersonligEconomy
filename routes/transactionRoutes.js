const express = require('express');
const transactionController = require('../controller/transactionController');
const validateTransaction = require('../middlewares/validateTransaction');

const router = express.Router();

//hent alle transaktioner
router.get('/', transactionController.getAllTransactions);
//hent en enkelt transaktion ved ID
router.get('/:id', transactionController.getTransactionById);
//opret en ny transaktion
router.post('/', validateTransaction, transactionController.createTransaction);
//opdater en transaktion ved ID
router.put('/:id', transactionController.updateTransaction);
//Slet en transaktion ved ID
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
