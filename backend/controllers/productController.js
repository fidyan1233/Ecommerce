const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");




// Create Product   ---admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});






exports.getAllProducts = catchAsyncErrors(async (req, res) => {
const resultPerPage = 5;
const productCount = await Product.countDocuments();
    const apifeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const product = await apifeature.query;
    res.status(200).json({
        success: true,
        product
    })
}
    
);

// update product ---admin

exports.updateProduct = catchAsyncErrors(async (req, res) => {
    let product = await Product.findById(req.params.id);


    if (!product) {
        return res.status(400).json({
            success: false,
            message: "Product not found"

        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false })

    res.status(200).json({
        success: true,
        product
    })
});

// delete product 

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found" ,404))
    }

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
})
;
// get product details 

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found" ,404))
    }
    res.status(200).json({
        success: true,
        product,
        productCount,
    })
}
);

