import React from 'react';
import footerImg from './lab-assets/van-pic.png';

export default class PizzaChocolateFooter extends React.Component {
    render() {
        return (
            <footer>
                <img src={footerImg} />
                <h3>James Cromwell</h3>
                <p>Food enthusiast, photography fan, chocolate fanatic, and so much more...</p>
                <button>Share this recipe!</button>
            </footer>
        );
    }
}