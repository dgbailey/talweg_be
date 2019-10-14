const db = require('./bookingsDQL');
const express = require('express');
const router = express.Router();

router.get('/:id',(req,res) =>{
    const id = req.params.id;
    db.getAllByUserId(id).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
})

module.exports = router;