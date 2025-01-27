const express = require("express");
const urlController = require("../controllers/urlController");

const router = express.Router();

router
  .route("/")
  .post(urlController.createShortUrl)
  .get(urlController.getAllUrls);

router
  .route("/:id")
  .get(urlController.getUrlDetails)
  .patch(urlController.updateUrl)
  .delete(urlController.deleteUrl);

module.exports = router;
