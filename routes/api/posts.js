const express = require("express");
const router = express.Router();

//@route GET api/posts
router.get("/", (req, res) => res.send("Posts routes"));

module.exports = router;
