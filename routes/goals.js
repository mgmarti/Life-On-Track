const express = require("express");
const router =express.Router();


//route GET api/goals get users goals
//access is private
router.get("/", (req,res)=> {
    res.send("Get users goals");
});


//route POST api/goals add users goals
//access is public
router.post("/", (req,res)=> {
    res.send("add goals");
});

//route PUT api/goals/:id  update users goals
//access is private
router.put("/:id", (req,res)=> {
    res.send("update goals");
});

//route DELETE api/goals/:id delete users goals
//access is public
router.delete("/:id", (req,res)=> {
    res.send("delete goals");
});

module.exports = router;