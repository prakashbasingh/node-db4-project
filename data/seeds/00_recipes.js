
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipeName: 'Apple Pie', instruction: "do however you would like to do"},
        { recipeName: 'Cheese Cake', instruction: "do however you would like to do"},
        { recipeName: 'Tomato Chilli Sauce', instruction: "do however you would like to do"}
      ]);
    });
};
