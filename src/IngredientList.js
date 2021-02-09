import React from 'react';
import { ingredients } from './data.js';
import style from './app.module.css';



export default class IngredientList extends React.Component {
    render() {

        const ingredientItems = ingredients.map(ingredient => <div>
            <span>{ingredient.name} {ingredient.amount}</span>
        </div>)
        return (
            <div className={style.listBackground}>{ingredientItems}</div>
        );
    }
}