import { getIngredients, getPopulatedMeals } from '../db';

export const getShoppingListRoute = {
    method: 'get',
    path: '/shopping-list',
    handler: async (req, res) => {
        const ingredients = await getIngredients();
        const populatedMeals = await getPopulatedMeals();
        const futureMeals = populatedMeals.filter(meal => {
            const mealDate = new Date(meal.plannedDate);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return mealDate > yesterday;
        });
        
        const requiredIngredients = futureMeals.flatMap(meal => meal.recipe.ingredients);
        const requiredIngredientsNames = [...new Set(requiredIngredients.map(ingredient => ingredient.name))];
        const missingIngredients = requiredIngredientsNames.filter(
            ingredientName => !ingredients.some(userIngredient => userIngredient.name === ingredientName.toLowerCase())
        );
        res.status(200).json(missingIngredients);
    },
}