import React, { Component } from 'react';
import withToolTip from './withTooltip';

class Movie extends Component {
    render() {
        return (
            <div>
                Movie 
                { this.props.showTooltip && <div>Some tooltip</div>} 
                { !this.props.showTooltip && <div>Moused out bitch!</div>}
            </div>
        );
    }
}

export default withToolTip(Movie);
//EXPORTING 