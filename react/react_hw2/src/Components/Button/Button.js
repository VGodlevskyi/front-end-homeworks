import React, {Component} from 'react';
import './button.scss'
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const{backgroundColor, text, onClick}=this.props;
        return (
            <button style={{backgroundColor: backgroundColor}} className="button" onClick={onClick}>{text}</button>
        );
    }
}

export default Button;

Button.propTypes={
    backgroundColor:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}