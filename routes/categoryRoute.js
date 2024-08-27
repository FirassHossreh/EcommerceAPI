const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  getSpaceficCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categorycontroller");
router.route("/category").post(createCategory).get(getCategories);
router
  .route("/category/:id")
  .get(getSpaceficCategory)
  .put(updateCategory)
  .delete(deleteCategory);
module.exports = router;
