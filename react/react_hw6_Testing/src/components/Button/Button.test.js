import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {act} from '@testing-library/react'
import Button  from './Button';

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

it('Testing render of button - done ', () => {
    const onClick = jest.fn();

    act(() => {
        render(<Button text="TextButton" backgroundColor="black" onClick={onClick}/>, container) ;
    });

    const button = container.querySelector('button');

    expect(button.textContent).toBe('TextButton');
    expect(button.getAttribute("style")).toBe('background-color: black;');

    act(() => {
        for (let i = 0; i < 10; i++) {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onClick).toHaveBeenCalledTimes(10);
});