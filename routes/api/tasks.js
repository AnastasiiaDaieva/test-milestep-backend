const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate } = require("../../middlewares");

router.get("/", ctrl.getTasks);
router.post("/", ctrl.createTask);
// router.put("/:taskId", ctrl.editTask);
router.delete("/:taskId", ctrl.deleteTask);
router.patch("/:taskId/done", ctrl.markDone);

module.exports = router;
