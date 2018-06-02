import React, {Component} from 'react';
// import {recipeList} from "./recipes";
// import { Recipes } from "./api/recipe";
import { recipeItems } from './../imports/recipe_item'

//COMPONENTS
import TitleBar from './../imports/header';
import RecipesList from './../imports/recipes';
import SubmitRecipe from './../imports/submitRecipe';


class App extends Component {

    constructor(props) {
        super(props);

    }
    render() {

        let recipep = this.props.recipe;
        console.log(recipep);

        let title = 'Recipe Keeps';
        let subTitle = 'Created by Vantol Bennett';
        return (
            <div>
                <TitleBar title={title} subtitle={subTitle}/>
              <h1>
              </h1>
              <div className="wrapper">
                  <RecipesList recipes={recipep}/>
                  <SubmitRecipe />
              </div>

            </div>
        )
    }
}

export default App;
