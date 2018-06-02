import React, {Component} from 'react';
import {Recipes} from "./api/recipe";
// import PropTypes from 'prop-types';

class RecipeItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
         let recipe = this.props.recipeItem;
         console.log(recipe);

        const {_id, name, method, rating} = this.props.recipeItem;

        return (
            <div className="item">
                <div className="recipe" >
                    <img className="card-img-top"/>
                    <div className="recipe__name">
                        <h1>{name}</h1>
                        <p className="recipe__rating">{rating}</p>
                    </div>
                    <div className="recipe__method">
                        <p>{method}</p>
                    </div>
                    <div className="recipe__actions">
                        <button className="button button--round" onClick={() => {
                            Recipes.update({_id: _id},{
                                $inc: {rating: 1}
                            })
                        }}>+1</button>
                        <button className="button button--round" onClick={() => {
                            Recipes.update(_id, {
                                $inc: {rating: -1}
                            })
                        }}>-1</button>
                        <button className="button button--round" onClick={() => {
                            Recipes.remove(_id);
                        }}>X</button>
                    </div>
                </div>
            </div>
        );
    }
}

// RecipeItem.propTypes = {};

export default RecipeItem;



