// @ts-ignore
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Header from "../components/Header";
import React from "react";

let container: HTMLElement | null = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    if (container === null) {
        return
    }
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with value', () => {
    act(() => {
        render(<Header />, container)
    })
    expect(container?.textContent).toBe("ツイッター")
});
