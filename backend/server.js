const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
const express = require('express');
const path = require('path');


// handling uncaught exception 
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down The Server`);
    process.exit(1);
})

dotenv.config({path:"backend/config/config.env"});



connectDatabase();

PORT = process.env.PORT;

const server=app.listen(PORT,()=>{
    console.log(`server is working on port ${PORT}`)
})

// unhandled promise rejection 
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting Down The Server`);


    server.close(()=>{
        process.exit(1);
    })
});



