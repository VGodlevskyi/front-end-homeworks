import React from 'react';
import './button.scss'
import PropTypes from 'prop-types';

const Button = (props)=> {
    const{backgroundColor, onClick, text}=props;
           return (
            <button style={{backgroundColor: backgroundColor}} className="button" onClick={onClick}>{text}</button>
        );
};

export default Button;

Button.propTypes={
    backgroundColor:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}