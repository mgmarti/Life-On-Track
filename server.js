const express = require ("express");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

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


app.get("/", (req,res)=> res.send("mic check 1-2"));



app.listen(PORT, ()=> {
    console.log (` app is running on ${PORT}!`);
});

