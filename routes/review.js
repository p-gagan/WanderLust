const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview,isloggedIn,isReviewAuthor} = require("../middleware.js")
const reviewController = require("../Controllers/review.js")


//Review Post Route
router.post("/",validateReview,isloggedIn,wrapAsync(reviewController.addReview));

//Review Delete Route
router.delete("/:reviewID",isloggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;