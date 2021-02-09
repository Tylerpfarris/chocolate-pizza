import React from 'react';

export default class ButtonList extends React.Component {
    render() {
        return (
            <ul>
                <li><button><img src={this.props.button1} alt="fb" /></button></li>
                <li><button><img src={this.props.button2} alt="fl" /></button></li>
                <li><button><img src={this.props.button3} alt="gg" /></button></li>
                <li><button><img src={this.props.button4} alt="ig" /></button></li>
            </ul>
        )
    }
}