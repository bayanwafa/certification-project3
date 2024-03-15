const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Define route to serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
