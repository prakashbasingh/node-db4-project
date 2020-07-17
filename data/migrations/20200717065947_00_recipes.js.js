
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl => {
        tbl.increments()
        tbl.string("RecipeName", 200)
         .notNullable()
        tbl.string("instruction", 500)
        .notNullable()
  })

  .createTable("ingredients", tbl => {
        tbl.increments()
        tbl.string("ingredientName", 200)
            .notNullable()

  })

  .createTable("recipe_ingredient", tbl => {
         tbl.increments()
         tbl.string("recipeId")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT")
        tbl.string("ingredientId")
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT")
        tbl.string("quantity", 200)
            .notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
