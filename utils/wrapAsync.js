//  this is used to handle the error occure 

module.exports = (fn) => {
    return (req, res, next) =>{
        fn(req, res, next).catch(next);
    }
}