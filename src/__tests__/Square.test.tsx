// @ts-ignore
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Square from "../components/Square";
import React from "react";

let container: HTMLElement | null = null;
beforeEach(() => {
    console.log('before each')
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    console.log('after each')
    // cleanup on exiting
    if (container === null) {
        return
    }
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with value', () => {
    act(() => {
        render(<Square value={'X'} onClick={() => {}}/>, container)
    })
    expect(container?.textContent).toBe("O")
});
