import React from 'react';

export default class ChocolatePizzaHeader extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <button src= {this.props.button1} ></button>
                </div>
            </header>
        );
    }
}

