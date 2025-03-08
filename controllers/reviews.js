const Review = require("../models/review.js");
const listing = require("../models/listing.js");


// Post route
module.exports.createReview = async (req, res) =>{
    console.log(req.params.id);
    let Listing = await listing.findById(req.params.id)
    let  newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    Listing.reviews.push(newReview);

    await newReview.save();
    await Listing.save();

    console.log("New review saved");

    res.redirect(`/listings/${Listing._id}`);
}


//delete review route

module.exports.deleteReview = async(req, res)=>{
    let {id, reviewId}= req.params;
    await listing.findByIdAndUpdate(id, {$pull: {reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}