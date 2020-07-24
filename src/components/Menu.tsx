import React from "react";
import { Link } from "react-router-dom"

function Menu() {
    return(
        <div className="menu">
            <ul className="menu__container">
                <li className="menu__item">
                    <Link to="/">
                        タイムライン
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/profile">
                        プロフィール
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/about">
                        このサイトについて
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
