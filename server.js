const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler"); // middleware to handle errors
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // middleware to parse req.body
app.get("/root", (req, res)=> res.json({message: "Hello ji"}));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler); // mounting middleware to handle errors

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
