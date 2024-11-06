module.exports = (err, req, res, next) => {
    console.error("Error:", err);
  
    res.status(err.statusCode || 500).json({
      status: err.status || "error",
      message: err.message || "Internal Server Error",
    });
  };
  