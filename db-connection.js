const mongoose = require("mongoose");

const connectionString = process.env.DB ? process.env.DB.trim() : null;

if (!connectionString) {
  console.error("ERROR: DB connection string is not defined in environment variables");
  console.error("Please set the DB environment variable with your MongoDB connection string.");
  process.exit(1);
}

if (connectionString.includes("<db_password>")) {
  console.error("ERROR: Please replace <db_password> in your connection string with your actual MongoDB password");
  process.exit(1);
}

// Handle connection events
mongoose.connection.on("connected", () => {
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Connect to the database
mongoose.connect(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err.message);
  
  if (err.message.includes("authentication failed") || err.code === 8000) {
    console.error("\nAuthentication Error - Please check:");
    console.error("1. Your MongoDB username is correct");
    console.error("2. Your MongoDB password is correct");
    console.error("3. If your password contains special characters, they may need URL encoding");
    console.error("4. Make sure your MongoDB user has the correct permissions");
    console.error("\nCommon special characters that need encoding:");
    console.error("  @ -> %40");
    console.error("  : -> %3A");
    console.error("  / -> %2F");
    console.error("  ? -> %3F");
    console.error("  # -> %23");
    console.error("  [ -> %5B");
    console.error("  ] -> %5D");
  }
  
  process.exit(1);
});

module.exports = mongoose.connection;
