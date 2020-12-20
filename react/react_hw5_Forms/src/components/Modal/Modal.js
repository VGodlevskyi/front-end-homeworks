import React from 'react';
import './modal.scss'
import PropTypes from 'prop-types';

const Modal = (props) => {

        return (
            <>
                <div className="modal__wrapper" onClick={props.onClick}></div>
                <div className="modal__container">
                    <div className="modal__header-wrapper">
                        <h2 className="modal__header">{props.header}</h2>
                        {props.closeButton && <button className={'modal__container-closeBtn'} onClick={props.onClick}>X</button>}
                    </div>
                    <div className="modal__body">
                        <p className="modal__text">{props.text}</p>
                        <div className="modal__btns-container">{props.actions}</div>
                    </div>
                </div>
            </>
        );
}

export default Modal;

Modal.propTypes={
    header:PropTypes.string,
    closeButton:PropTypes.bool,
    text:PropTypes.string,
    actions:PropTypes.object,
    onClick:PropTypes.func
};