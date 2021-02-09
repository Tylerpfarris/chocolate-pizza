import React from 'react';
import { ingredients } from './data.js';



export default class IngredientList extends React.Component {
    render() {

        const ingredientItems = ingredients.map(ingredient => <div>
            <span>{ingredient.name} {ingredient.amount}</span>
           
        </div>)
        return (
            <div>{ingredientItems}</div>
        );
    }
}