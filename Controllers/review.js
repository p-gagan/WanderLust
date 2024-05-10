const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");

module.exports.addReview = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let review = await new Review(req.body.review);
    review.author = req.user._id;
    await listing.reviews.push(review);
    await listing.save();
    await review.save();
    console.log(review);
    req.flash("success","Review created successfully!");
    res.redirect(`/listing/${listing._id}`);
};

module.exports.destroyReview = async(req,res)=>{
    let {id, reviewID} = req.params;

    await Listing.findByIdAndUpdate(id,{$pull: {reviews:reviewID}});
    await Review.findByIdAndDelete(reviewID);
    req.flash("success","Review deleted successfully!");
    res.redirect(`/listing/${id}`);
};