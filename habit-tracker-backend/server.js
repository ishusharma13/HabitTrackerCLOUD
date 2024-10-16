const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors
const habitRoutes = require('./routes/habitRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests only from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow only specific HTTP methods
  credentials: true,  // Allow credentials if needed
}));

app.use(express.json());  // Parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/habits', habitRoutes);  // Register habit routes

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log('MongoDB URI:', process.env.MONGO_URI);


