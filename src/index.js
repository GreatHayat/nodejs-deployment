require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");
const route = require("./routes");

const app = express();
app.use(express.json({ limit: "25mb" }));

// mongoose
//   .connect("mongodb://localhost:27017/bootcamp")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.log(`Couldn't connected to mongodb ${error}`));

app.use("/assets", express.static("uploads"));
app.use("/api", route);
app.use(errorHandler);

const PORT = 5001;
app.listen(PORT, () => console.log(`App is listining on port ${PORT}`));
