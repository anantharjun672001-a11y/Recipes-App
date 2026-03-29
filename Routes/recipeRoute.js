import express from "express";
import { createRecipe } from "../Controllers/recipeController";

const router = express.Router();

router.post("/create",createRecipe);


export default router;