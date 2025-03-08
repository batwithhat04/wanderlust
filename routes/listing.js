// require('dotenv').config();
// const express= require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const listing = require("../models/listing.js");
// const {isLoggedIn, isOwner} = require("../middleware.js");
// const multer  = require('multer');
// const {storage} = require("../cloudConfig.js");
// const upload = multer({ storage });


// const listingController = require ("../controllers/listings.js");


// router
//     .route("/")
//     .get( wrapAsync(listingController.index))
//     //.post(isLoggedIn, wrapAsync (listingController.postListings));
//     .post(upload.single('Listing[image]'), (req, res)=>{
//         res.send(req.file);
//     })


// // new route
// router.get("/new",isLoggedIn, listingController.renderNewForm)


// router
//     .route("/:id")
//     .get(wrapAsync(listingController.showListing))
//     .put(isLoggedIn, isOwner, wrapAsync(listingController.updateListings))
//     .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListings));







// // middleware to handle backend error

// router.use((err, req, res, next) =>{
//     let {statusCode, message = "something went wrong"} = err;
//     // res.status(statusCode).send(message);
//     res.render("error.ejs", {err});
// })

// // edit route
// router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))






// module.exports = router;



//-----------------------------------------------------------------

const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const listing = require('../models/listing.js');
const { isLoggedIn, isOwner } = require('../middleware.js');
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });
const listingController = require('../controllers/listings.js');

// List all listings
router
    .route('/')
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single('Listing[image]'), // Handle image uploads
        wrapAsync(listingController.postListings)
    );
   

// Render the "new listing" form
router.get('/new', isLoggedIn, listingController.renderNewForm);

// Handle individual listing routes
router
    .route('/:id')
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single('Listing[image]'), // Handle updated image uploads
        wrapAsync(listingController.updateListings)
    )
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListings));

// Render the "edit listing" form
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// Middleware to handle errors
router.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something went wrong' } = err;
    res.status(statusCode).render('error.ejs', { err });
});

module.exports = router;
