const db = require('./bookingsDQL');
const express = require('express');
const router = express.Router();

//strange error where the order of these requests was giving error  "code": "22P02", having /:id first in route path


router.get('/today',(req,res) =>{

    db.getAllToday().then(data => res.status('200').json(data['rows'])).catch(err =>res.status('500').json(err));
});

router.get('/:id',(req,res) =>{
    const id = req.params.id;
    db.getAllByUserId(id).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
});








module.exports = router;