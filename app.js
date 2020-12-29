require('dotenv').config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const authRoutes = require("./routes/auth")

const port = process.env.PORT || 8000;

// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED")
}).catch((err)=>{
    console.log("DB GOT OOPS")
});

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/api", authRoutes);

// Starting a server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`)
});