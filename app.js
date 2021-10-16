const express = require("express");
const cors = require("cors");

// Set up the express app
const app = express();

// Database Configuration
const db = require("./config/db.config");

// Test Database Connection
db.authenticate()
  .then(() => {
    console.log("Database connection has been established");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//// Model Declarations
const User = require("./models/User");
const Product = require("./models/Product");

//// Model Relationships
User.hasMany(Product);

//// FOR DEVELOPMENT PURPOSES ONLY ////
// Synchronize Database
// db.sync({ alter: true });
// db.sync({ force: true })
// db.sync();

// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/", require("./routes/default"));
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));

// Start Application
app.listen(8081, console.log("Server Started -/-/-/-"));
