var connect = require('express');
console.log("Express server listening on port 8888");
connect.createServer(
    connect.static(__dirname)
).listen(8888);

livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname);