const express = require("express");
const { registerUser, loginUser, userLogout, forgotPassword } = require("../controllers/userController");
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(userLogout);
router.route("/password/forgot").post(forgotPassword);


module.exports = router;