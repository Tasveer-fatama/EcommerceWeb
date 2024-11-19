const mongoose = require ("mongoose")

const ConnectDb = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/EcommerceWeb").then((data)=>{
        console.log(`Mongodb connected with server:${data.connection.host}`);
        
        })
}

module.exports=ConnectDb