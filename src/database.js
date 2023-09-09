import mongoose from "mongoose";
mongoose.connect("mongodb+srv://melanie:bartolo2003@cluster0.hszw1vp.mongodb.net/?retryWrites=true&w=majority")
    .then(db =>console.log('DB is connected'))
    .catch(error =>console.log(error))  