const express = require("express")
const cors = require('cors')
const product = require("./routes/productRoute")
const errorMiddleware = require("./middleware/error")


const app = express();
app.use(cors());
app.use(express.json());



app.use("/api/v1",product);

//middleware for errors
app.use(errorMiddleware)

module.exports= app


