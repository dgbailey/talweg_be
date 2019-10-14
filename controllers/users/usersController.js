const db = require('./usersDQL');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register',(req,res) => {
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 8);
    credentials.password = hash;
    //TODO: write middleware to check for existing usernames
    db.insert(credentials).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
})


module.exports = router;


