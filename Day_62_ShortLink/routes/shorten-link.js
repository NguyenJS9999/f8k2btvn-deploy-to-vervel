var express = require("express");
var router = express.Router();
const shortenLinkController = require("../controllers/shortenLink.controller");

/* GET shorten link listing. */
router.get("/", shortenLinkController.index); // shortenLink.read
router.post("/", shortenLinkController.handleShortUrl); // shortenLink.read

router.get("/:id", shortenLinkController.handleDetailUrl)
router.post("/:id", shortenLinkController.handleCheckPassword)
router.post("/delete/:id", shortenLinkController.delete)



module.exports = router;