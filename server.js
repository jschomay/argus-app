var connect = require('express');
console.log("Express server listening on port 3333");
connect.createServer(
    connect.static(__dirname)
).listen(3333);