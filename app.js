

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const listing = require("./models/listing.js");
// const Review = require("./models/review.js");
// const session = require("express-session");
// const flash = require("connect-flash");
// const path = require("path");
// const ListingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");
// const userRouter = require("./routes/user.js");


// app.set("views engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));


// // requiring the function from utils folder
// // const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");

// const methodoverride = require("method-override");
// app.use(methodoverride("_method"));

// const ejsMate = require("ejs-mate")
// app.engine("ejs", ejsMate)


// app.use(express.static(path.join(__dirname, "/public")))  // use static file like css, 

// const sessionOptions = {
//     secret: "mysupersecret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {                                 //to map the session to the cookie and to set the cookie to be secure and save its expiry date
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,      //For security reasons, we want to make sure that the cookie is only accessible by the server, prevents cross-scripting
//     }
// }




// app.use(session(sessionOptions));
// app.use(flash());//flash for alerts and messages

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser);
// passport.deserializeUser(User.deserializeUser);

// app.use("/listings", ListingRouter)
// app.use("/listings/:id/reviews", reviewRouter)
// app.use("/", userRouter);

// // app.get("/demouser", async(req, res)=> {
// //     let FakeUser = new User({
// //         email: "test@gmail.com",
// //         username: "Ragnor Lothbruke"
// //     });
// //     let registeredUser = await User.register(FakeUser, "helloworld");
// //     res.send(registeredUser)
// // })
// //For future development
// // app.use((req, res, next) => {
// //     res.locals.success = req.flash("success");
// //     res.locals.error = req.flash("error");
// //     next();
// // })


// app.listen("8080", () =>{
//     console.log("server is listening to port 8080")
// })


// app.get("/", (req, res) =>{
//     res.send("Hi i am root");
// })



// // database work
// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

// main().then(() => {
//     console.log("database connected");
// }).catch((err) => {
//     console.log(err);
// })

// async function main() {
//     await mongoose.connect(mongo_url)
//

//-----------------------------------------------------------------------

if (process.env.NODE_ENV === "production") {
    require('dotenv').config();
}
console.log(process.env.secret);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const path = require("path");
const methodoverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const ListingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");

// Setting up EJS as the view engine
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodoverride("_method"));


// MongoDB Connection

const dbUrl = process.env.ATLASDB_URL;
mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database Connection Error:", err);
    });

// Session Configuration

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 60 * 60, // 1 day
});

store.on("error", ()=>{
    console.log("Error in Mongo Session Store", error);
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        httpOnly: true, // Secure cookie access
    },
};






app.use(session(sessionOptions));
app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash Messages Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});



// Routers
app.use("/", userRouter);
app.use("/listings", ListingRouter);
app.use("/listings/:id/reviews", reviewRouter);

// Start Server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

// Root Route
// app.get("/", (req, res) => {
//     res.send("Welcome to Wanderlust!");
// });
