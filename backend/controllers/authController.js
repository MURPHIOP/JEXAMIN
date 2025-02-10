const userModel = require("../models/user");
const { hashPassword, comparePassword } = require("../utils/bcryptUtils");
const { generateToken } = require("../utils/jwtUtils");

module.exports.signup = async function(req, res, next) {
    const { username, email, password } = req.body;
    try {
        let user = await userModel.findOne({ email});
        if (user) {
        return res.status(400).json({ message: "User already exists." })
    }
    else {
        const hashedPassword = await hashPassword(password);
        user = await userModel.create({ username, email, password: hashedPassword  });
        res.status(201).json({  message: "User created", user });
    }
    } catch (error) {
        console.error(error.message);
    }
}

module.exports.signin = async function(req, res, next) {
    const { email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email or password is incorrect." });
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Email or password is incorrect." });
        }
        const token = await generateToken(user._id);
        res.set("Authorization", `Bearer ${token}`);
        res.json({ message: "User authenticated successfully.", user, token });
    }
    catch (error) {
        console.error(error.message);
    }
}