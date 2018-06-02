import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import RecipeItem from '././recipe_item';
import FlipMove from 'react-flip-move';


class RecipeList extends Component {
    constructor(props) {
        super(props);
    }

    renderRecipe() {
        if (this.props.recipes.length ===0) {
            return (
                <div className="item">
                    <p className="item__message item__message-empty">
                        add some recipes....
                    </p>
                </div>
            )
        }else {
            return this.props.recipes.map((recipes) => {
                return <RecipeItem key={recipes._id} recipeItem={recipes}/>;
            });
        }
    }
    render() {
        let recipes = this.props.recipes;
        console.log(recipes);


        return (
            <div>
                <h2>Recipe List</h2>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderRecipe()}
                </FlipMove>
            </div>
        );
    }
}

// RecipeList.propTypes = {};

export default RecipeList;
