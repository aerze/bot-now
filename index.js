const express = require('express');

const app = new express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('200 OK');
});

app.listen(port, () => {
  console.log('listening on port', port);
});