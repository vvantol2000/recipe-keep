import React from 'react';
import {Recipes} from "./api/recipe";

const submitRecipe = () => {
    const submitHandler = (event) => {
        let recipeName = event.target.recipeName.value;
        let recipeMethod = event.target.recipeMethod.value;
        event.preventDefault();

        if(recipeName && recipeMethod) {
            event.target.recipeName.value = '';
            event.target.recipeMethod.value = '';
            Recipes.insert({
                name: recipeName,
                method: recipeMethod,
                rating: 0
            })
        }
    };
    return (
        <div className="item">
            <form className="form" onSubmit={submitHandler}>
                <input className="form__input" name="recipeName" type="text" placeholder="Enter Recipe..."/>
                <input className="form__input-method" name="recipeMethod" type="text" placeholder="Enter instructions"/>
                <button className="button">Add Recipe</button>
            </form>
        </div>
    );
};

export default submitRecipe;
