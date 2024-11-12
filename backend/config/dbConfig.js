const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.dbURI)
    .then(() => {
        console.log("DB connected...");
    })
    .catch(err => console.error('MongoDB connection error...............:', err));