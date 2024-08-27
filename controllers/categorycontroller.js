const categoryModel = require("../models/CategoryModel");
const aysncHandler = require("express-async-handler");
const getCategories = aysncHandler(async (req, res) => {
  const categories = await categoryModel.find();
  res.status(200).json(categories);
});
const createCategory = aysncHandler(async (req, res) => {
  const newCategory = new categoryModel({ name: req.body.name });
  const result = await newCategory.save();
  res.status(201).json(result);
});

module.exports = {
  createCategory,
  getCategories,
};
