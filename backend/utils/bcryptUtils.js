const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword
}

const comparePassword = async (enteredPassword, storedHashedPassword) => {
    const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
    return isMatch
}

module.exports = { hashPassword, comparePassword }