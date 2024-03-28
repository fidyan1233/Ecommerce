const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");




// Create Product   ---admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});






exports.getAllProducts = catchAsyncErrors(async (req, res,next) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
    const apifeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await apifeature.query;
    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
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
        return next(new ErrorHandler("Product Not Found", 404))
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
        return next(new ErrorHandler("Product Not Found", 404))
    }
    res.status(200).json({
        success: true,
        product,
    })
}
);

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);

    console.log('Product:', product); // Log product to check if it's defined

    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    console.log('Is Reviewed:', isReviewed); // Log isReviewed to check if it's defined

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString()) {
                rev.rating = rating;
                rev.comment = comment;
            }
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});


// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const productId = req.query.productId;
    const reviewId = req.query.id;

    if (!productId || !reviewId) {
        return next(new ErrorHandler("Product ID or Review ID not provided", 400));
    }

    try {
        const product = await Product.findByIdAndUpdate(
            productId,
            { $pull: { reviews: { _id: reviewId } } },
            { new: true, useFindAndModify: false }
        );

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        // Check if review was deleted
        const reviewDeleted = product.reviews.find(review => review._id.toString() === reviewId);
        if (reviewDeleted) {
            return next(new ErrorHandler("Review deletion failed", 500));
        }

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        return next(new ErrorHandler("Internal Server Error", 500));
    }
});