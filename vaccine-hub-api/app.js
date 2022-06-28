const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())


module.exports = app;