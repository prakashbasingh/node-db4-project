const express = require("express");
const router = express.Router();


// const Recipes = require("./recipesModel.js")

router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json({data: recipes})
        })
        .catch(error => {
            res.status(500).json({message: "failed to get recipes"})
        })
})

router.get("/:id/shop-list", (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
        .then(recipes =>{
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json({message: "failed tpo get ingredients and amounts"})
        })
})

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params
    Recipes.getInstructions(id)
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json({message: "failed to retrieved recipe instruction"})
        })
})





module.exports = router