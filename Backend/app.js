const express = require("express")
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

//route import 
const product = require("./routes/productRoute")
app.use("/api/v1",product);

module.exports= app


