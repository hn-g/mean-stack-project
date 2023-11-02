// server/server.js

const express = require('express');
const bodyParser = require('body-parser');
const stackRoutes = require('./routes/apiRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', stackRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
