const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const databaseConnection = require("./configs/databaseConnection");
const categoryRoutes = require("./routes/categoryRoute");
const ApiErrors = require("./utils/apiErrors");
const apiErrorMiddleware = require("./middlewares/apiErrorMiddleware");
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
app.all("*", (req, res, next) => {
  next(new ApiErrors(`cant find this route : ${req.originalUrl} `, 400));
});
/*routes in application*/

/* custom middlerwares */
app.use(apiErrorMiddleware);
/* custom middlerwares */

/*server listening process*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening of port ${PORT}`);
});
/*server listening process*/

/* handle rejection for promises */
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Error : ${err}`);
});
/* handle rejection for promises */
