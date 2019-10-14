const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');


const subscriptionController = require('./controllers/subscriptions/subscriptionController');
const bookingController = require('./controllers/bookings/bookingsController');
const usersController = require('./controllers/users/usersController');
const jwtAuth = require('./auth/auth');
//dynamic porting


//http headers and logging middleware
const s = express();

s.use(express.json());
s.use(morgan('dev'));
s.use(helmet());
s.use(cors());//cors needs req to check headers, order matters
s.use('/subscriptions',subscriptionController);
s.use('/booking',bookingController);
s.use('/users',usersController);
s.use('/login',jwtAuth);













//controllers





module.exports = {s};