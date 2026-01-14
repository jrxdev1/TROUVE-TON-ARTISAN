const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors(
    {origin: 'http://localhost:5173'} // Le front React
));

// Routes API
app.get('/', (req, res) => {
  res.json({ message: 'API Artisans' });
});

module.exports = app;