
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredientName: 'Apple'},
        { ingredientName: 'Butter'},
        { ingredientName: 'Milk'},
        { ingredientName: 'Flower'},
        { ingredientName: 'water'},
        { ingredientName: 'Sugar'},
        { ingredientName: 'Veggies'},
        { ingredientName: 'Salt'},
        { ingredientName: 'Baking Powder'},
        { ingredientName: 'Tomato'},
        { ingredientName: 'Chilli'},
        { ingredientName: 'Garlic'},
        { ingredientName: 'Ginger'},
        { ingredientName: 'Brown Sugar'}
      ]);
    });
};
