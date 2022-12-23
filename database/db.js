const e = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

try {
  mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  throw e;
}

module.exports = mongoose;
