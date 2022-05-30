const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/users");

const { authenticate } = require("../../middlewares");

router.post("/signup", ctrl.signUp);
router.post("/signin", ctrl.signIn);
router.get("/signout", authenticate, ctrl.signOut);

module.exports = router;
