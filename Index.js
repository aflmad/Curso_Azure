const http = require('http');

const server = http.createServer((request, response) => {
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("Hello World! from Angel");
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log("Server running at http://localhost:%d", port);
