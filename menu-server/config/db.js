const mongoose = require('mongoose')
const config = require('config')
// const DB = config.get('mongooseURL')
const mongooseURL = process.env.MONGODB_URI || config.get('mongooseURL');
const connectDB = async () => {
    try {
        await mongoose.connect(mongooseURL)
        console.log("DB connection Established");
    } catch (err) {
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;