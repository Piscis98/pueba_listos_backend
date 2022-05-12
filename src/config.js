'use strict';
const dotenv = require('dotenv');
// const assert = require('assert');

dotenv.config();

const {

LOCAL_PORT,
HOST,
HOST_URL,
LOCAL_URL,
PRODUCTION_URL,
SECRET,
NUMBER_HASH,

HOST_DB,
PORT_DB,
USER_DB,
PASSWORD_DB,
DB,
DIALECT,
MAX,
MIN,
ACQUIRE,
IDLE

} = process.env;

// assert(PORT, 'PORT is required');
// assert(HOST, 'HOST is required');

module.exports={

  port:LOCAL_PORT,
  host:HOST,
  url:HOST_URL,
  localUrl:LOCAL_URL,
  productionUrl:PRODUCTION_URL,
  secret:SECRET,
  numberHash:NUMBER_HASH,

  //CONFIG DB
  host_db:HOST_DB,
  port_db:PORT_DB,
  user_db:USER_DB,
  password_db:PASSWORD_DB,
  db:DB,
  dialect:DIALECT,
  max:MAX,
  min:MIN,
  acquire:ACQUIRE,
  idle:IDLE

}
