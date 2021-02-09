import React from 'react';
import ChocolatePizzaHeader from './ChocolatePizzaHeader.js';
import ChocolatePizzaRecipe from './ChocolatePizzaRecipe.js';
import IngredientList from './IngredientList.js';
import PizzaChocolateFooter from './PizzaChocolateFooter.js';

import Style from './app.module.css';

import pizzaImg from './lab-assets/choco-pizza.png';
import fbIcon from './lab-assets/fb-icon.png';
import flicIcon from './lab-assets/flic-icon.png';
import gpIcon from './lab-assets/gp-icon.png';
import hrImg from './lab-assets/hr-img.png';
import instIcon from './lab-assets/insta-icon.png';



export default class ChocolatePizzaPage extends React.Component {
  render() {
    return (
      <div>
        <ChocolatePizzaHeader
          button1={fbIcon}
          button2={flicIcon}
          button3={gpIcon}
          button4={instIcon} />
          <h1>Chocolate Pizza</h1>
        <img src={pizzaImg} alt="choco pizza" />
        <ChocolatePizzaRecipe />
        <IngredientList />
        <PizzaChocolateFooter />
      </div>
    );
  }
}