const mongoose = require ("mongoose")

const ConnectDb = ()=>{
    mongoose.connect("mongodb://localhost:27017/EcommerceWeb").then((data)=>{
        console.log(`Mongodb connected with server:${data.connection.host}`);
        
        }).catch((err)=>{
        console.log(err);
        
        })
}

module.exports=ConnectDb