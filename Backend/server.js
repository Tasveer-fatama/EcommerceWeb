const app = require("./app");
const dotenv = require('dotenv');
const ConnectDB = require("./config/database")
const cors = require("cors")


// config 
dotenv.config({path:"backend/config/.env"});
console.log(process.env.PORT);

//enable cors
app.use(cors());

//connecting to database
ConnectDB()


app.listen(process.env.PORT,()=>{
console.log(`server is running on http://localhost:${process.env.PORT || 4000} `)


})