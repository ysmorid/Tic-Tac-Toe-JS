import http from 'http';
require("babel-core/register");

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Tic Tac Toe\n');
}).listen(8000, 'localhost');

console.log('Server running at http://localhost:8000/');
