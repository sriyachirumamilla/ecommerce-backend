// routes/products.js
const express = require("express");
const Product = require("../models/Product");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

// Add Product (Admin Only)
router.post("/", authenticateToken, async (req, res) => {
    const { name, description, price, category } = req.body;
    const product = new Product({ name, description, price, category });
    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: "Error adding product" });
    }
});

// Get Products with Pagination and Filtering
router.get("/", async (req, res) => {
    const { page = 1, limit = 10, category } = req.query;
    try {
        const query = category ? { category } : {};
        const products = await Product.find(query)
            .skip((page - 1) * limit)
            .limit(Number(limit));
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Error fetching products" });
    }
});

module.exports = router;
