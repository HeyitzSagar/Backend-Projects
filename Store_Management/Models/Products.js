const mongoose = require("mongoose");

// defined schemas for product creation, list, update, delete
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide product name"],
    trim: true,
    maxlength: [30, "product name should not be greater than 30 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide the description"],
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: [
      "Electronics",
      "Clothing",
      "Books",
      "Beauty",
      "Home",
      "Toys",
      "Sports",
      "Other",
    ],
  },
});

//   define orderschema here for orders

const orderschema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  totalPrice: { type: Number, required: true },
  customerName: { type: String, required: true },
});

// define schema for customers
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Add more fields as needed
});

// Define schema for categories
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add more fields as needed
});
const Product = mongoose.model("Product", ProductSchema);
const Order = mongoose.model("Order", orderschema);
const Customer = mongoose.model("Customer", customerSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = { Product, Order, Customer, Category };
