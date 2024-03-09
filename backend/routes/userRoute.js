const express = require("express");
const { registerUser, loginUser, userLogout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const router = express.Router();
const { isAuthenticatedUesr,authorizeRoles } = require("../middleware/auth");


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(userLogout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUesr ,  getUserDetails);
router.route("/password/update").put(isAuthenticatedUesr,updatePassword);
router.route("/me/update").put(isAuthenticatedUesr,updateProfile);
router.route("/admin/users").get(isAuthenticatedUesr,authorizeRoles("admin"),getAllUser);
router.route("/admin/user/:id").get(isAuthenticatedUesr,authorizeRoles("admin"),getSingleUser).put(isAuthenticatedUesr,authorizeRoles("admin"),updateUserRole).delete(isAuthenticatedUesr,authorizeRoles("admin"),deleteUser);


module.exports = router;