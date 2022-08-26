

const express = require("express");
const { signupUser, deleteUser } = require("../controller/signup-controller");

const router = express.Router()
router.route("/").post(signupUser)
router.route("/deleteuser").delete(deleteUser)
module.exports = router;