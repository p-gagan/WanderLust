const express = require("express");
const router = express.Router({mergeParams:true});
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isloggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../Controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage });

router.route("/")
.get( wrapAsync(listingController.index))
.post(upload.single('listing[image]'),validateListing,isloggedIn, wrapAsync(listingController.addListing));

router.get("/new",isloggedIn,listingController.renderNewForm);

router.route("/:id")
.patch(upload.single('listing[image]'),validateListing,isloggedIn,isOwner, wrapAsync(listingController.updateRoute))
.delete(isloggedIn,isOwner, wrapAsync(listingController.destroyListing))
.get(wrapAsync(listingController.showListing));

router.get("/:id/edit",isloggedIn,isOwner, wrapAsync(listingController.renderEditForm));



module.exports = router;