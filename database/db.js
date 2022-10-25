const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
