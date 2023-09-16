const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const User = require("../models/Users");
const { validationResult, ValidationChain } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtSecret="mynameisdiscodancerjindagimeragana"
router.post(
  "/createuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 6 }),
  body("name").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: secPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try Logging With Correct Credentials" });
      }
      const pwdComparator= await bcrypt.compare(req.body.password,userData.password)
      if (!pwdComparator) {
        return res
          .status(400)
          .json({ errors: "Try Logging With Correct Credentials" });
      }
      const data={
        user:{
            id:userData.id
        }
      }
      const authToken = jwt.sign(data,jwtSecret)
      return res.json({ success: true ,authToken:authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
