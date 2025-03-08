const express = require('express');
const app = express();
const port = 192.34.58.133;

app.get('/', (req, res) => {
  res.send('Hello from Service 2!');
});

app.listen(port, () => {
  console.log(`Service 2 is running on http://localhost:${port}`);
});

