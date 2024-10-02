const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));
app.use(cors());

mongoose
    .connect("mongodb://127.0.0.1/school", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/", Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
