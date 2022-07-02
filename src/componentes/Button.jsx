import React from 'react';
import '../stylesheet/Button.css' 

class Button extends React.Component {
  render() {
    return(
      <button
        className={this.props.isClickButton ? 'click-button' : 'reset-button' } 
        onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}


export default Button