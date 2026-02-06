const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: [ // Le front React
      'http://localhost:5173',
      'https://trouve-ton-artisan.vercel.app'
    ]
  }));

// Routes API
app.get('/', (req, res) => {
  res.json({ message: 'API Artisans' });
});

const categoriesRoutes = require('./routes/categories');
app.use ('/categories', categoriesRoutes);

const specialitesRoutes = require ('./routes/specialites');
app.use ('/specialites', specialitesRoutes);

const artisansRoutes = require ('./routes/artisans');
app.use ('/artisans', artisansRoutes);

const contactRoutes = require ('./routes/contact');
app.use ('/contact', contactRoutes);

module.exports = app;