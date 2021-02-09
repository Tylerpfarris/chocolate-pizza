import './App.css';
import React from 'react';
import ButtonList from './ButtonList.js';

import fbIcon from './lab-assets/fb-icon.png';
import flicIcon from './lab-assets/flic-icon.png';
import gpIcon from './lab-assets/gp-icon.png';
import instIcon from './lab-assets/insta-icon.png';


export default class ChocolatePizzaHeader extends React.Component {
    render() {
        return (
            <header>
                <h3>Delicious Recipes</h3>
                <span>By Sam and Tyler</span>

                <ButtonList
                    button1={fbIcon}
                    button2={flicIcon}
                    button3={gpIcon}
                    button4={instIcon}
                />

            </header>
        );
    }
}

