
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <h1>Welcome to Program 6!</h1>
        <h2>Docker Build Pipeline Successful</h2>
        <p>Running using Docker Container</p>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
