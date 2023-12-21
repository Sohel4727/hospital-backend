// app.js
const express = require('express');
const connectDB = require('./DB/db');
const apiRoutes = require('./Routes/userRoutes');
const app = express();
const cors=require('cors');
const bodyParser = require('body-parser');
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
app.use(cors());
// Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
