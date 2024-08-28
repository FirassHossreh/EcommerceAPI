const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const categoryModel = require("../models/CategoryModel");
const morgan = require("morgan");
const apiErrors = require("../utils/apiErrors");
/* get categories */
const getCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  const categories = await categoryModel.find().limit(limit).skip(skip);
  return res
    .status(200)
    .json({ results: categories.length, page, data: categories });
});
/* get spacefic category */
const getSpaceficCategory = asyncHandler(async (req, res, next) => {
  const category = await categoryModel.findById(req.params.id);
  if (!category) {
    return next(new apiErrors("cateogry not found", 404));
  }
  res.status(200).json({ data: category });
});
/* create category */
const createCategory = asyncHandler(async (req, res) => {
  const newCategory = await categoryModel.create({
    name: req.body.name,
    slug: slugify(req.body.name),
  });
  return res.status(201).json(newCategory);
});
/* update category */
const updateCategory = asyncHandler(async (req, res) => {
  const updatedCategory = await categoryModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      slug: slugify(req.body.name),
    },
    { new: true }
  );
  if (!updatedCategory) {
    return res.status(404).json({ msg: "category not found" });
  }
  return res.status(200).json(updatedCategory);
});
/* delete category */
const deleteCategory = asyncHandler(async (req, res) => {
  const deletedCategory = await categoryModel.findByIdAndDelete(req.params.id, {
    new: true,
  });
  if (!deletedCategory) {
    return res.status(404).json({ msg: "category not found" });
  }
  res.status(200).json({ deletedCategory });
});
module.exports = {
  createCategory,
  getCategories,
  getSpaceficCategory,
  updateCategory,
  deleteCategory,
};
