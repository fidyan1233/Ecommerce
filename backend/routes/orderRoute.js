const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const {  authorizeRoles, isAuthenticatedUesr } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUesr, newOrder);

router.route("/order/:id").get(isAuthenticatedUesr, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUesr, myOrders);

router.route("/admin/orders").get(isAuthenticatedUesr, authorizeRoles("admin"), getAllOrders);

router.route("/admin/order/:id").put(isAuthenticatedUesr, authorizeRoles("admin"), updateOrder).delete(isAuthenticatedUesr, authorizeRoles("admin"), deleteOrder);

module.exports = router;