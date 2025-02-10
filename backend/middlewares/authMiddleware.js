const userModel = require("../models/user");
const { verifyToken } = require("../utils/jwtUtils")

module.exports.isAuthenticated = async function(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ message: "Access denied." });
    }
    const verified = verifyToken(token);
    if (!verified) {
        return res.status(403).json({ message: "Access Denied" });
    }
    const user = await userModel.findById(verified.userId);
    req.user = user;
    next();
}