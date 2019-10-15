const db = require('./subscriptionsDQL');
const express = require('express');
const router = express.Router();
const tokenRestricted = require('../../customMiddleware/tokenRestricted');


router.get('/',tokenRestricted,(req,res,next) =>{

    db.getAll().then(data => res.status('200').json(data))
    .catch(err => res.status('500').json(err));
})

router.get('/:id',(req,res) =>{
    const id = req.params.id;
  
    db.getAllByUserId(id).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
})

router.post('/',(req,res) => {
    const body = req.body;
    db.insert(body).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
})

router.delete('/:id',(req,res) => {
    const id = req.params.id;
    db.deleteById(id).then(data => res.status('200').json({deleted:true})).catch(err=> res.status('500').json(err));
})

router.put('/:id',(req,res) => {
    const id = req.params.id;
    const body = req.body;

    db.updateById(id,body).then(data => res.status('200').json(data)).catch(err => res.status('500').json(err));
})
module.exports = router;
