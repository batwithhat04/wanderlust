const listing = require("./models/listing");
const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        //save the redirectURl
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a new listing");
        return res.redirect("/login");
    }
    next();
}


module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


module.exports.isOwner = async (req, res, next)=>{
    let {id} = req.params;
    let Listing = await listing.findById(id);
    if(!Listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "you are not allowed to edit this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next)=>{
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId).populate("author");
    if(!review.author._id.equals(res.locals.currUser._id)){
        //save the redirectURl
        // req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}