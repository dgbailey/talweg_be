const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const subscriptionController = require('./controllers/subscriptions/subscriptionController');


//dynamic porting


//http headers and logging middleware
const s = express();

s.use(express.json());
s.use(morgan('dev'));
s.use('/subscriptions',subscriptionController);
s.use(cors);//cors needs req to check headers
s.use(helmet);








//controllers





module.exports = {s};