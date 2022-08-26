const express = require("express")
const multer = require("multer")
const path = require("path")
const { cretedUserData, deletedUserData, findPostUserData } = require("../controller/priscrition-controller.js")

const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req,fils,cd) {
        cd(null,"public/uploads")
    },
    filename: function (req, file, cd) {
        const ext = path.extname(file.originalname)
        console.log(ext);
        const fn = "profile-pic-" + Date.now() +ext
        req.body.pic="uploads/" + fn
        cd(null,fn)
    }
})
const uploads = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
})
router.route("/userData").post(uploads.single("avatar"),cretedUserData).delete(deletedUserData)
router.route("/userData/find/:id").get(findPostUserData)

module.exports = router;