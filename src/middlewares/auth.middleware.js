const jwt = require('jsonwebtoken');
const config = require('../config');
// const app = require('../app');
// const secret = app.get('secret');
const secret = config.secret;



function verifyToken(req, res, next){

  const bearerHeader =req.headers['authorization'];

  if(typeof bearerHeader != 'undefined'){

    const bearer = bearerHeader.split(' ');

    const bearerToken=bearer[1];


    if(bearerToken){

      jwt.verify(bearerToken, secret, (err, data)=>{

        if(err){
          if(err.message=='jwt expired'){

            res.json({text:'Token expirado'})

          }else{
            res.sendStatus(403)
          }
        }else{

          req.decoded = data;
          next();

        }

      });

    }



  }else{

    res.sendStatus(403);

  }

}


module.exports = verifyToken;
