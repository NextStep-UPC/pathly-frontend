const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`JSON Server está corriendo en http://localhost:${PORT}`);
});
