const db = require('./usersDQL');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {generateToken} = require('../../auth/auth');

router.post('/register',(req,res) => {
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 8);
    credentials.password = hash;
    //TODO: write middleware to check for existing usernames
    db.insert(credentials)
    
    .then(([data]) => {
        
        let token = generateToken(data)
        res.status('200').json({"id":data.id,"username":data.username,token})
    
    
    })
  
    
    .catch(err => res.status('500').json(err));
})


module.exports = router;


