module.exports = (req, res, next) => {
    const { description, amount, category, type } = req.body;

    //Tjek om alle felter er udfyldt
    if (!description || !amount || !category || !type) {
        return res.status(400).json({ error: 'All fields are required: description, amount, category, type' });
    }

    //Tjek om amount er et tal og er positiv
    if (NaN(amount) || Number(amount) <= 0) {
        return res.status(400).json({ error: 'Amount must be a positive number' });
    }

    //Tjek om category er gyldig
    const validateCategories = ['food', 'transport', 'entertainment', 'utilities', 'other'];
    if (!validateCategories.includes(category.toLowerCase())) {
        return res.status(400).json({ error: `Category must be one of the following: ${validateCategories.join(', ')}` });
    }

    //Tjek om type er gyldig
    if (!['income', 'expense'].includes(type)) {
        return res.status(400).json({ error: 'Type must be either income or expense' });
    }

    next();
}