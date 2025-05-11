const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load .env variables
dotenv.config();

function connectToDb() {
  mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
}

module.exports = connectToDb;
