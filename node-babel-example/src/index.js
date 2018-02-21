import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (url !== '/') {
    res.statusCode = 404;
    return res.end();
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server._listen = server.listen;

server.listen = (port = process.env.PORT || 1337) =>
  server._listen(port, () =>
    console.log(`Listening on http://localhost:${port}`),
  );

export default server;
