
// import
const express = require('express');

// env
const port = process.env.PORT || 5000;

// init
const app = express();

// config
app.get('/', (req, res) => {
	res.sendfile('index.html');
});

// run
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

