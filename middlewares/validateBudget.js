module.exports = (req, res, next) => {
    const { category, limit, month, year } = req.body;

    //Tjek om alle felter er udfyldt
    if (!category || !limit || !month || !year) {
        return res.status(400).json({ error: 'All fields are required: category, limit, month, year' });
    }

    //Tjek om limit er et tal og er positiv
    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ error: 'Limit must be a positive number' });
    }

    //Tjek om year er gyldig
    if (isNaN(year) || year < 2000) {
        return res.status(400).json({ error: 'Year must be a number between 2000 and 2100' });
    }

    //Hvis alt er ok gå videre
    next();
}