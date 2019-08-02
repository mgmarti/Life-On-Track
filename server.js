const express = require ("express");
const connectDB =require("./config/db");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//Connect Database way of MongoDB Atlas
connectDB();

//Init Middleware
app.use(express.json({extended:false}));
//static assets for heroku
//if (process.env.NODE_ENV === "production") {
    //app.use(express.static("client/build"));
//}

//app.get("*", (req,res) =>{
    //res.sendFile(path.join(__diname,"./client/build/index.html"));
//});
//Routes Directory
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/goals", require("./routes/goals"));


app.get("/", (req,res)=> res.render('../client/pages/About.js'));



app.listen(PORT, ()=> {
    console.log (` app is running on ${PORT}!`);
});

