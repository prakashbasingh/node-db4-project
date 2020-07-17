const db = require("../data/dbConfig.js")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes as r")
        .join("recipe_ingredient as ri", "ri.recipeId", "r.id" )
        .join("ingredients as i", "i.id", "rc.ingredientId")
        .select("r.recipeName", "i.ingredientName", "ri.quantity")
        .where({"ri.recipeId" : "recipeId"})

}

function getInstructions(recipe_id){
    return db("recipes")
        .select("instruction")
        .where({ id })
}