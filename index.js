import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import recipeRoutes from "./Routes/recipeRoute.js";


dotenv.config();

const app = express();

// DB connect
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Recipes App API!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});