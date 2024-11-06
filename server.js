const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DB_LOCAL_URL)  // Removed deprecated options
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection failed", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
