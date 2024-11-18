const app = require("./app");
const dotenv = require("dotenv");
const config = require("./config/config.env")


// config 
dotenv.config();
console.log(process.env.PORT);


app.listen(process.env.PORT,()=>{
console.log(`server is running on http://localhost:${process.env.PORT || 4000} `);


})