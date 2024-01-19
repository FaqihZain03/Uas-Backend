// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Sinkronisasi model dengan database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', employeeRoutes);
// Tambahan rute lainnya dapat ditambahkan sesuai kebutuhan

// Server listening
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
