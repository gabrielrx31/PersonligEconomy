const transactionModel = require('../model/transactionModel');

//Opret en ny transaktion
exports.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Hent alle transaktioner
exports.getAllTransactions = async (req, res) => {
    try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//Hent en enkelt transaktion ved ID
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await transactionModel.findById(req.params.id);
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Opdater en transaktion ved ID
exports.updateTransaction = async (req, res) => {
    try {
        const updatedTransaction = await transactionModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!updatedTransaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Slet en transaktion ved ID
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await transactionModel.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

