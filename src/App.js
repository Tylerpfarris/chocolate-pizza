import React from 'react';
import ChocolatePizzaHeader from './ChocolatePizzaHeader.js';
import ChocolatePizzaRecipe from './ChocolatePizzaRecipe.js';
import IngredientList from './IngredientList.js';
import PizzaChocolateFooter from './PizzaChocolateFooter.js';

import pizzaImg from './lab-assets/choco-pizza.png';




export default class ChocolatePizzaPage extends React.Component {
  render() {
    return (
      <div>
        <ChocolatePizzaHeader />
        <h1>Chocolate Pizza</h1>
        <img src={pizzaImg} alt="choco pizza" />
        <ChocolatePizzaRecipe />
        <IngredientList />
        <PizzaChocolateFooter />
      </div>
    );
  }
}