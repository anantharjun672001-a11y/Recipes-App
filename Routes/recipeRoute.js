import express from "express";
import { createRecipe, getAllRecipes } from "../Controllers/recipeController.js";

const router = express.Router();

router.post("/create",createRecipe);

router.get("/all",getAllRecipes);


export default router;