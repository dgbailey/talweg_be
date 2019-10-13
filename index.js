const {s,port} = require('./server');

//server config fountin server.jss
s.listen(port,() => console.log(`server running on port ${port}`));
