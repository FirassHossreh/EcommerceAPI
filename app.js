const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const databaseConnection = require("./configs/databaseConnection");
const categoryModel = require("./models/CategoryModel");
const categoryRoutes = require("./routes/categoryRoute");
dotenv.config();
const app = express();
databaseConnection();

/*core middlewares*/
if (process.env.ENVIRUMENT === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
/*core middlewares*/

/*routes in application*/
app.use("/api/v1", categoryRoutes);
/*routes in application*/

/*server listening process*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening of port ${PORT}`);
});
/*server listening process*/
