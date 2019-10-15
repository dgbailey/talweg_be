const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    const token = req.headers.authorization;
    if(token){
        //do some stuff
        jwt.verify(token,'test',(err,decodedToken) =>{
            console.log(err) 
            if(err){
                res.status('401').json({error:'Token invalid'});
            }
            else{
                //access any values from the token?
                //store valies on req?
                next();
            }
        })
    }
    else{
        res.status('401').json({error:'Credentials needed'})
    }
}