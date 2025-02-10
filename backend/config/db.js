const mongoose = require("mongoose");

const connectDB = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database.");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;