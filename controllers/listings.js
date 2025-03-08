const listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapTocken = "pk.eyJ1IjoiYXZpbmFzaDIzMTMiLCJhIjoiY201ZmZkZGZpNWhheDJpc2RwbHl6NDJ2OCJ9.8g3F1wGg7AMYdyEcQ_R7IA";
const geocodingClient = mbxGeocoding({ accessToken: mapTocken });


//Index Route
module.exports.index = async (req, res) =>{
    const alllistings = await listing.find({});
    res.render("./listings/index.ejs", {alllistings});
}

//New Form Route
module.exports.renderNewForm = (req, res) =>{
    console.log(req.user);
    res.render("listings/new.ejs");
}

//Show Route
module.exports.showListing =  async (req,res) =>{
    let {id} = req.params;
    const Listing = await listing.findById(id)
    .populate({path: "reviews",
         populate:{
            path: "author"
         },
        })
    .populate("owner");    // populate will send all data insted of object

    if(!listing){
        req.flash("error", "listing not found");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {Listing});
}

//Create route 
module.exports.postListings = async (req,res, next) =>{
    //     let response= await geocodingClient
    //     .forwardGeocode({
    //     // query: req.body.listing.location,
    //     query: req.body.listing?.location || "",

    //     limit: 1
    //   })
    //     .send()
    //     console.log(response.body.features[0].geometry);
    //     res.send("done!")
        

    let url = req.file.path;
    let filename= req.file.filename;
    console.log(url, "..", filename);
    // const newlistings =new listing(req.body.listing);
    // newlistings.owner= req.user._id;
    // await newlistings.save();
    let {title, description, image, price, country, location } = req.body;
    let newlistings =new listing({
        title: title,
        description: description,
        image: {url, filename},
        price: price,
        country: country,
        location: location
    })
    console.log(req.user);
    newlistings.owner = req.user._id;
    await newlistings.save();
    req.flash("Success", "New listing created");

    res.redirect("/listings");
}


//Edit form

module.exports.renderEditForm = async (req, res) =>{
    let {id} = req.params;
    const Listing = await listing.findById(id);
    if(!Listing){
        res.redirect("/listings");
    }

    // let originalImageUrl=Listing.image.url;
    // originalImageUrl=originalImageUrl.replace("/upload", "/upload/h_300, w_250 ");
    res.render("listings/edit.ejs", {Listing})
}


//Update Route
module.exports.updateListings = async (req, res) =>{
    let {id} = req.params;
    let Listing = await listing.findByIdAndUpdate(id, { ...req.body.Listing});

    if (typeof req.file !== 'undefined'){
        let url = req.file.path;
        let filename= req.file.filename;
        Listing.image = {url, filename};
        await Listing.save();
    }
    
    res.redirect(`/listings/${id}`);
}


//Destroy Listings

module.exports.deleteListings = async (req, res) =>{
    let {id} = req.params;
    let deletedlising = await listing.findByIdAndDelete(id);
    console.log(deletedlising);
    res.redirect("/listings");
}


//---------------------------------------------------------------------------------------------------------------------------------------


