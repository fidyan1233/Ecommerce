const express =require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatedUesr,authorizeRoles } = require("../middleware/auth");



const router = express.Router();



router.route("/products").get( getAllProducts);

router.route("/product/new").post(isAuthenticatedUesr,createProduct);

router.route("/product/:id").put(isAuthenticatedUesr,updateProduct).delete(isAuthenticatedUesr,deleteProduct).get(getProductDetails);

router.route("/review").put(isAuthenticatedUesr, createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUesr, deleteReview);


module.exports = router