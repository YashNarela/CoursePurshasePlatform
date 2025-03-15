const mongoose = require("mongoose");

require("dotenv").config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log(`db connected`);
  } catch (error) {
    console.log("Error Connecting to DB", error);

    process.exit(1);
  }
};

module.exports = { connectDb };
