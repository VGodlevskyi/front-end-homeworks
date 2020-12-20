import React from 'react';
import './button.scss'
import PropTypes from 'prop-types';

const Button = (props)=> {
           return (
            <button style={{backgroundColor: props.backgroundColor}} className="button" onClick={props.onClick}>{props.text}</button>
        );
};

export default Button;

Button.propTypes={
    backgroundColor:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}