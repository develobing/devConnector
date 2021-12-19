const express = require('express');

const app = express();
const PORT = process.env.PORT || 5005;

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
