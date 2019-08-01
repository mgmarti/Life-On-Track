const express = require("express");
const router =express.Router();



//route POST api/users register users
//access is public
router.post("/", (req,res)=> {
    res.send("Register a user");
});

module.exports = router;