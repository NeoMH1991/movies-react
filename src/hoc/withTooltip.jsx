import React from 'react';

function withToolTip(Component) {
    return class withTooltip extends React.Component {

        //STATE HERE
        state = {
            showTooltip: false,
        }

        //PURE FUNCTIONS HERE
        mouseOver = () => {
            this.setState({showTooltip: true});
            console.log(this.state.showTooltip);
        }

        mouseOut = () => {
            this.setState({showTooltip: false});
            console.log('mouseout')
        }

        render() {
            return (
                <div 
                {...this.props}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                > 
                <Component 
                showTooltip={this.state.showTooltip}
                /> </div>
            )
        
        }
    }
}

//EXPORTING A FUNCTION
// Basic implementation of a file
// Import and Extend
// Return, State, EventHandler
// Render and Export



export default withToolTip;