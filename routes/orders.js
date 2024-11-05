// routes/orders.js
const express = require("express");
const Order = require("../models/Order");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

// Create Order
router.post("/", authenticateToken, async (req, res) => {
    const { products, total } = req.body;
    const order = new Order({ user: req.user.id, products, total });
    try {
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: "Error creating order" });
    }
});

// Get Orders by User
router.get("/", authenticateToken, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Error fetching orders" });
    }
});

module.exports = router;
