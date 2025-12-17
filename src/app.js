const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/auth.routes');
const dataRoutes = require('./routes/data.routes');

app.use('/auth', authRoutes);
app.use('/api', dataRoutes);

module.exports = app;
