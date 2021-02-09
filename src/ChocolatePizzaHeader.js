import './App.css';
import React from 'react';


export default class ChocolatePizzaHeader extends React.Component {
    render() {
        return (
            <header>
                <h3>Delicious Recipes</h3>
                <span>By Sam and Tyler</span>
                
                <div><button><img src={this.props.button1} alt="fb"/></button>
                <button><img src={this.props.button2} alt="fb"/></button>
                <button><img src={this.props.button3} alt="fb"/></button>
                <button><img src={this.props.button4} alt="fb"/></button></div>
                
            </header>
        );
    }
}

