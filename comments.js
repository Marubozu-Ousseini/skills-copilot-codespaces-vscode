// Create web server
const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed

// Define a route handler for the root URL (/)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});