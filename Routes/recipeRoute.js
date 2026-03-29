import express from "express";
import { createRecipe, getAllRecipes, getRecipeById } from "../Controllers/recipeController.js";

const router = express.Router();

router.post("/create",createRecipe);

router.get("/all",getAllRecipes);

router.get("/:id",getRecipeById);


export default router;