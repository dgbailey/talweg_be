const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


//header and logging middleware

const port = process.env.PORT || '8000';

const s = express();
s.use(express.json());
s.use(morgan);
s.use(cors);

//controllers





module.exports = {s,port};