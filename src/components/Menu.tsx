import React from "react";
import { Link } from "react-router-dom"

export interface MenuItem {
    id: number
    to: string
    title: string
}

export interface Props {
    menuItems: MenuItem[]
}

function Menu({ menuItems }: Props) {
    const liList = menuItems.map((menuItem) => {
        return (
            <li className={"menu__item"} key={menuItem.id}>
                <Link to={menuItem.to}>
                    {menuItem.title}
                </Link>
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
