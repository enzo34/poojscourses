const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb+srv://test:test@cluster0.hh6ua.mongodb.net/gestionuser?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to database!");
  } catch (error) {
    console.log("Connection failed!");
  }
};

module.exports = connectDB;
