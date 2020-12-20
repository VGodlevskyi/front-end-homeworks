import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Modal from './Modal';
import Button from "../Button/Button";
import {TOGGLE_FIRST_MODAL} from "../../redux/actionTypes";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Testing render of Modal - done', () => {
    const onClick = jest.fn();
    const actions =
        <div>
            <Button text="Ok" className="button"/>
            <Button text="Cancel" className="button"/>
        </div>
    ;

    act(() => {
        render(<Modal header="ModalHeader" closeButton={true} text="ModalText" actions={actions}
                      onClick={onClick}/>, container);
    });

    const modal = container.getElementsByTagName('div')[0];
    const modalHeader = container.getElementsByTagName('h2')[0];
    const modalText = container.getElementsByTagName('p')[0];
    const modalButton = container.querySelectorAll('button')[0];
    const modalCloseButton = container.querySelectorAll('button')[1];
    const modalCancelCloseButton = container.querySelectorAll('button')[2];

    expect(modalHeader.textContent).toBe('ModalHeader');
    expect(modalText.textContent).toBe('ModalText');
    expect(modalButton.textContent).toBe('X');
    expect(modalCloseButton.textContent).toBe('Ok');
    expect(modalCancelCloseButton.textContent).toBe('Cancel');

    act(() => {
        for (let i = 0; i < 10; i++) {
            modal.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        }
    });
    expect(onClick).toHaveBeenCalledTimes(10);

    act(() => {
        for (let i = 0; i < 10; i++) {
            modalCloseButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        }
    });
    expect(onClick).toHaveBeenCalledTimes(10);
});