import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <div className="about">
            <p>このサイトは完全にツイッターです。</p>
            <a href="https://github.com/shutarou-iijima/react-sample">
                <FontAwesomeIcon icon={faGithubAlt} />
            </a>
        </div>
    )
}

export default About
