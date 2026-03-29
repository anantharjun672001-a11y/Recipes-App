import Recipe from "../Models/recipeModels.js";


//Create a new recipe

export const createRecipe = async (req,res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Get all recipes

export const getAllRecipes = async (req,res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}