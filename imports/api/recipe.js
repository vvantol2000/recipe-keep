import { Mongo } from 'meteor/mongo';

export const Recipes = new Mongo.Collection('recipes');

// export const calculateRecipePositions = (recipes) => {
//     let rank = 1;
// };
