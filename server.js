require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const noteRouter = require("./routes/noteRouter");

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// Connect to MongoDB using async/await

const URI = process.env.MONGODB_URL;

async function connectToMongoDB() {
  try {
    await mongoose.connect(URI, {
      // useCreateIndex: true,
      // useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectToMongoDB();
