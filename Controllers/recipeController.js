import Recipe from "../models/recipeModel.js";

//Create a new recipe

export const createRecipe = async (req,res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}