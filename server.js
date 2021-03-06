const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // CUSTOM ROUTES GO HERE
  server.get('/view/:id', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/view', mergedQuery);
  });

  server.get('/edit/:id', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/edit', mergedQuery);
  });

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get('*', (req, res) => handle(req, res));
  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});
