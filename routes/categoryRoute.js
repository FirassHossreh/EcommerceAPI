const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
} = require("../controllers/categorycontroller");
router.route("/category").post(createCategory).get(getCategories);
module.exports = router;
