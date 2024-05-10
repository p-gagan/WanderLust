const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main().then((res) => {
    // if (err) throw err;
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
})

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"6637202531c4cc310ba11f66"}));
    await Listing.insertMany(initData.data);
};

initDB();