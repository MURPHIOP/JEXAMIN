const express = require("express");
const { signin, signup } = require("../controllers/authController");
const { dashboard } = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", function(req, res) {
    res.send("Welcome to the Node.js server!");
});
router.post("/signin", signin);
router.post("/signup", signup);
router.get("/dashboard", isAuthenticated, dashboard);

module.exports = router;