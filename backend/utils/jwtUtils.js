const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}

const verifyToken = (token) => {
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        return verified;        
    } catch (error) {
        return null;
    }
}

module.exports = { generateToken, verifyToken };

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2E4ZTY5ZWY1M2FlYzllNWRiMjdlNzUiLCJpYXQiOjE3MzkxMjQwNzd9.4qb7s2sYN6iPLXIkfLNrj1ZHTN3AzbEvoWZ0GH6y3H4