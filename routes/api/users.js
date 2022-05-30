const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/users");

const { authenticate } = require("../../middlewares");

router.post("/signup", ctrl.signUp);
router.post("/confirm", ctrl.resendConfirmation);
router.get("/confirm/:confirmationToken", ctrl.confirm);

router.post("/signin", ctrl.signIn);
router.get("/signout", authenticate, ctrl.signOut);

module.exports = router;
