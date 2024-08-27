const { kMaxLength } = require("buffer");
const { MongoGCPError } = require("mongodb");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Catergory name required"],
      unique: [true, "catgory name most be unique"],
      minlength: [3, "category name at least 3 charecter"],
      MaxLength: [255, "category name at most 255 charecter"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("categories", categorySchema);

module.exports = categoryModel;
