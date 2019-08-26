if(process.env.NODE_ENV==='development' || process.env.NODE_ENV==='test' || !process.env.NODE_ENV){
    require('dotenv').config();
};

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();

// Check mongoose connection
if(process.env.NODE_ENV == 'test'){
    mongoose.connect(`mongodb://localhost/e-commerce-${process.env.NODE_ENV}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
} else {
    mongoose.connect(`mongodb+srv://mongodb:${process.env.MONGODB_PASSWORD}@mongodb-9zz64.gcp.mongodb.net/e-commerce?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
}



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connect to mongodb');
});

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

if(process.env.NODE_ENV == 'development'){
    const logger = require('morgan');
    app.use(logger('dev'))
}

// Routes
app.use('/api', routes)

// Error Handler
app.use(errorHandler)

module.exports = app