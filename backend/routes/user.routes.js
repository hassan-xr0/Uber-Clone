const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')

router.post("/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Firstname should be 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 character long"),
  ],
  userController.registerUser
);

router.post("/login",
    [
      body("email").isEmail().withMessage("Invalid Email"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be 6 character long"),
    ],
    userController.loginUser
  );

router.get('/profile',authMiddleware.authUser, userController.getUserProfile);
router.get('/logout',authMiddleware.authUser, userController.logoutUser);

  
module.exports = router;
