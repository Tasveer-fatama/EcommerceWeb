const app = require("./app");
const dotenv = require('dotenv');
const ConnectDB = require("./config/database")
const cors = require("cors")


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


// config 
dotenv.config({path:"backend/config/config.env"});
console.log(process.env.PORT);

//enable cors
app.use(cors());

//connecting to database
ConnectDB()


const server= app.listen(process.env.PORT,()=>{
console.log(`server is running on http://localhost:${process.env.PORT || 8000} `)


})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });