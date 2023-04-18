const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myapi", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
	console.log('Connected to MongoDB');
});

// Define API endpoint
app.post('/api/data', (req, res) => {
	const inputData = req.body.data;
	const outputData = inputData.toUpperCase();
	res.send(outputData);
});

// Start server
// const port = 3000;
// app.listen(port, () => {
// 	console.log(`Server running on port ${port}`);
// });
// const express = require('express');

// const app = express();
// const port = 3000;

// // Define a route for the API
// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.send(`Hello, ${name}!`);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
