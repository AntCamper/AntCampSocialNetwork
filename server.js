const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/userRoutes');
const thoughtsRoutes = require('./routes/thoughtsRoutes');
const db = require('./utils/db');
const mongoose = require('mongoose');

// Explicitly specify the path to the .env file
dotenv.config({ path: __dirname + '/.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));
  
// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Request ${req.method} made to ${req.path}`);
  next();
});

// Apply routes
app.use('/users', usersRoutes);
app.use('/thoughts', thoughtsRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
