const router = require("express").Router();
const goalRoutes = require("./goals");

// Goal routes
router.use("/goals", goalRoutes);

module.exports = router;
