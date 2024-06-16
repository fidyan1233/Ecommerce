const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const path = require('path');

app.use(express.json());
app.use(cookieParser());
// routes imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));




app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
  

// middleware for errors 
app.use(errorMiddleware);




module.exports = app;