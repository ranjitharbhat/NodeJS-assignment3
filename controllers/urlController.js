const Url = require("../models/urlModel");
const shortid = require("shortid");

exports.createShortUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();
    const newUrl = await Url.create({ originalUrl, shortUrl });
    res.status(201).json({
      status: "Success",
      data: {
        url: newUrl,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUrlDetails = async (req, res, next) => {
  try {
    const url = await Url.findById(req.params.id);
    if (!url) return res.status(404).json({ message: "URL not found" });
    res.status(200).json({
      status: "Success",
      data: {
        url,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUrls = async (req, res, next) => {
  try {
    const urls = await Url.find();
    res.status(200).json({
      status: "Success",
      results: urls.length,
      data: {
        urls,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateUrl = async (req, res, next) => {
  try {
    const updatedUrl = await Url.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUrl) return res.status(404).json({ message: "URL not found" });
    res.status(200).json({
      status: "Success",
      data: {
        url: updatedUrl,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteUrl = async (req, res, next) => {
  try {
    const url = await Url.findByIdAndDelete(req.params.id);
    if (!url) return res.status(404).json({ message: "URL not found" });
    res.status(204).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
