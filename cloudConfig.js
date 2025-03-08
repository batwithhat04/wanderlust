// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// require('dotenv').config();



// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// });


// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: 'wanderlust_DEV',
//       allowedFormats: ["png", "jpeg", "jpg"], // supports promises as well
      
//     },
//   });


//   module.exports= {
//     cloudinary,
//     storage,
//   }


const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config(); // Load .env file

// Configure Cloudinary with credentials from .env file
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV', // Folder name in your Cloudinary account
        allowedFormats: ['png', 'jpeg', 'jpg'], // Allowed file formats
    },
});

module.exports = {
    cloudinary,
    storage,
};
