const express = require("express");
const router = express.Router();

//@route GET   api/users
//@desc        Test route
//@access      Public
router.get('/', (req, res) => res.send('User route'));



// const {
//     check,
//     validationResult
// } = require("express-validator/check");

// const User = require("../models/Users");
// const path = require("path");


// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"))
// });

// //route POST api/users register users
// //access is public
// router.post("/users",
//     [
//         check("name", "Please add user name")
//         .not()
//         .isEmpty(),
//         check("email", "Please include a valid email").isEmail(),
//         check("password", "Please enter a password with 6 or more characters")
//         .isLength({
//             min: 6
//         })
//     ],
//     (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array()
//             });
//         }

//         res.send("passed");

//     });

module.exports = router;