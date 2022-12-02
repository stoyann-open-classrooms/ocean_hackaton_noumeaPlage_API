// dependency
const path = require('path')
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");



// // load config DB
 const connectDB = require("./config/db");

//load environement variables
dotenv.config({ path: "./config/config.env" });

//Connect to database
 connectDB();


// initialize express  application
const app = express();

// Body parser
app.use(express.json())



// Dev logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}












const PORT = process.env.PORT || 5058;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} root URL : http://localhost${PORT}/noumea/plage/api/ `.white
      .underline.bold.bgGreen
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
