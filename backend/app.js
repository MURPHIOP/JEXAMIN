const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const connectDB = require("./config/db");
connectDB();
const authRoutes = require("./router/authRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));