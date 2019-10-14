const {s} = require('./server');
require('dotenv').config();

const port = process.env.PORT || '8000';
//server config fountin server.jss

s.listen(port,() => console.log(`server running on port ${port}`));
