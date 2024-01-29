var express = require("express");
var router = express.Router();
const shortenLinkController = require("../controllers/shortenLink.controller");

/* GET shorten link listing. */
router.get("/", shortenLinkController.index); // shortenLink.read
router.post("/", shortenLinkController.handleCreateShortenLink); // shortenLink.read



module.exports = router;