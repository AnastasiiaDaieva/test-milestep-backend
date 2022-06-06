const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate } = require("../../middlewares");

router.get("/", ctrl.getTasks);
router.post("/", ctrl.createTask);
// router.put("/:taskId", authenticate, ctrl.editTask);
router.delete("/:taskId", ctrl.deleteTask);
// router.patch("/:taskId/done", authenticate, ctrl.markDone);

module.exports = router;
