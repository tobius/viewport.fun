
// import
const express = require('express');
const path = require('path');

// env
const port = process.env.PORT || 5002;

// init
const app = express();

// config
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// run
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

