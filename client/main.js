import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import App from './../imports/app'
import { Tracker } from 'meteor/tracker';
import { Recipes } from "../imports/api/recipe";

Meteor.startup(function () {
    Tracker.autorun(() => {
        let recipeList = Recipes.find({}, {
            sort: {
                rating: -1
            }
        }).fetch();
        console.log(recipeList);
        ReactDOM.render(<App recipe={recipeList}/>, document.getElementById('app'));
    })
});