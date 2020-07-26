import React from "react";
import { useHistory } from "react-router-dom"

export interface MenuItem {
    id: number
    to: string
    title: string
}

export interface Props {
    menuItems: MenuItem[]
    selectedMenuItemId: number
    onClick: (id: number) => void
}

function Menu({ menuItems, onClick, selectedMenuItemId }: Props) {
    const history = useHistory()

    const liList = menuItems.map((menuItem) => {
        const selected = menuItem.id === selectedMenuItemId

        return (
            <li className={`menu__item ${selected && "menu__item--selected"}`} key={menuItem.id}>
                <a
                    onClick={() => {
                        onClick(menuItem.id)
                        history.push(menuItem.to)
                    }}
                >
                    {menuItem.title}
                </a>
            </li>
        )
    })

    return(
        <div className="menu">
            <ul className="menu__container">
                {liList}
            </ul>
        </div>
    )
}

export default Menu