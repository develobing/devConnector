const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5005;

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
