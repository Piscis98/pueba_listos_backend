const app = require('./app');
const auth = require('./middlewares/auth.middleware');
const jwt = require('jsonwebtoken');
const {createUserSchema,updateUserSchema}=require('./schemas/user.schemas');
const validateData = require('./middlewares/validateData.middleware');

// app.post('/api/login', (req, res)=>{


//   const payload = {id:3, name:'name'};
//   const token= jwt.sign({payload}, app.get('secret'), {expiresIn:'12h'});
//   res.json({token});



// });


// app.get('/api/protected', auth, validateData(createUserSchema),(req, res)=>{

//    const decoded = req.decoded;

//   const response = {text:'protected', decoded};

//  res.json(response);

//  });


async function init(){
  await app.listen(app.get('port'));
};

init();
