const express = require("express");
const router =express.Router();



//route GET api/auth Get logged in user
//access is private
router.get("/", (req,res)=> {
    res.send("get logged in user");
});


//route POST api/auth auth user and get token/passport
//access is public
router.post("/", (req,res)=> {
    res.send(" Log in user");
});

module.exports = router;