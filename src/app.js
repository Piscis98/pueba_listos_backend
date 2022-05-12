// require('dotenv').config();
var cors = require('cors');
const config = require('./config');
const express = require('express');
const auth = require('./middlewares/auth.middleware');
const bodyParser = require('body-parser');
const routes = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');
const acronimeRoutes = require('./routes/acronime.routes');


const port = process.env.PORT || config.port;

const secret = config.secret;

const app = express();

//Settings
app.set('port', port);
app.set('secret', secret);

var whiteList = [config.localUrl, config.productionUrl, 'http://localhost:4200'];

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whiteList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true,
                    allowedHeaders: ['Content-Type', 'Authorization'],
                    methods: ['GET','POST','DELETE','PUT'],
                    optionsSuccessStatus: 204
                  }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/v1',routes);
app.use('/api/v1/user',auth,userRoutes);
app.use('/api/v1/acronime',acronimeRoutes);

module.exports=app;
