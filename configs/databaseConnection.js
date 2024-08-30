const mongoose = require("mongoose");
const databaseConnection = () => {
  mongoose.connect(process.env.CONNECTION_STRING).then((connect) => {
    console.log(`database connected in ${connect.connection.host}`);
  });
  // .catch(() => {
  //   console.log("An error occurred connecting to the database");
  // });
};
module.exports = databaseConnection;
