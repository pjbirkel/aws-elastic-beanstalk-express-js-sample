const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('PJ you are a rockstar and the greatest guy in the world!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
