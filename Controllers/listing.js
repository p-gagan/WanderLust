const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.addListing = async (req, res, next) => {
    const n_listing = new Listing(req.body.listing);
    let url = req.file.path;
    let filename = req.file.filename;
    n_listing.owner = req.user._id;
    n_listing.image = {url,filename};
    await n_listing.save();
    req.flash("success","New listing created successfully!");
    res.redirect("/listing");
};

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing don't exist anymore!");
        res.redirect("/listing");
    }
     
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");

    res.render("listing/edit.ejs", { listing ,originalImageUrl});
};

module.exports.updateRoute = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    let url = req.file.path;
    let filename = req.file.filename;

    if(typeof req.file!="undefined"){
        listing.image = {url,filename};
        await listing.save();
    }

    req.flash("success","Listing Updated successfully!");
    res.redirect(`/listing/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    const deleteOne = await Listing.findByIdAndDelete(id);
    console.log(deleteOne);
    req.flash("success","Listing deleted successfully!");
    res.redirect("/listing");
};

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    if(!listing){
        req.flash("error","Listing don't exist anymore!");
        res.redirect("/listing");
    }
    res.render("listing/show.ejs", { listing });
};