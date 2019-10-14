const {s} = require('./server');
const port = process.env.PORT || '8000';
//server config fountin server.jss
s.listen(port,() => console.log(`server running on port ${port}`));
