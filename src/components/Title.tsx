import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";


function Header() {
    return (
        <div className="header__container">
            <h1 className="header__item--title">ツイッター</h1>
            <a className="header__item--icon" href="https://github.com/shutarou-iijima/react-sample">
                <FontAwesomeIcon icon={faGithubAlt} />
            </a>
        </div>
    )
}

export default Header
