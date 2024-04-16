const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const MemoriesRoutes = require('./routes/memories')
/**
  models: for the schema DB
  controllers: for the get|post|patch|delete actions
  routes: for the routing system using express
 */

const app = express();

// middleware
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

  
//  Routes
app.use('/api/memories', MemoriesRoutes)
  
// / 
const DB_URI = 'mongodb+srv://mainwebminds:mainwebminds123@cluster0.yq8zr3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// mainwebminds | mainwebminds123
// Connect to MongoDB database using Mongoose
mongoose.connect(DB_URI)
    .then(() => {
        console.log('connected to database')
        app.listen(4000, () => {
            console.log('CONNECTED && Listing on 4000:');
        })
    })
    .catch((err) => {
        console.log(err);
    })
  