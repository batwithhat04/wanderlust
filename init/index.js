const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listing.js");


// database work
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(dbUrl);
}

const initiallizedatabase = async () =>{
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj) =>({...obj, owner: "67700318e4b8315ec122c60c"}))
    await listing.insertMany(initdata.data);
    console.log("data was initialised. ");
}

initiallizedatabase();