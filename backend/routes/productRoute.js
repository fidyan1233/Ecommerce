const express =require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const { isAuthenticatedUesr,authorizeRoles } = require("../middleware/auth");


const router = express.Router();



router.route("/products").get( isAuthenticatedUesr,authorizeRoles("admin"), getAllProducts);

router.route("/product/new").post(isAuthenticatedUesr,createProduct);

router.route("/product/:id").put(isAuthenticatedUesr,updateProduct).delete(isAuthenticatedUesr,deleteProduct).get(getProductDetails);


module.exports = router