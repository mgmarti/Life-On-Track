const router = require("express").Router();
const goalsController = require("../../controllers/goalsController");

// Matches with "/api/goals"
router
  .route("/")
  .get(goalsController.findAll)
  .post(goalsController.create);

// Matches with "/api/goals/:id"
router
  .route("/:id")
  .get(goalsController.findById)
  .put(goalsController.update)
  .delete(goalsController.remove);

module.exports = router;
