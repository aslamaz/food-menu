const express = require('express')
const bodyParser = require('body-parser')
const cors  = require('cors')
const connectDB = require('./config/db')
// import jwt from 'jsonwebtoken'


const app = express()
const PORT = process.env.PORT || 5000


//middle ware you can use Express.json also
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connectDB()

const routeCategory = require('./route/category')
const routeSubCategory = require('./route/subCategory')



app.use('/Category',routeCategory)
app.use('/subCategory',routeSubCategory)




app.listen(PORT,()=>console.log(`server started on port ${PORT}`))