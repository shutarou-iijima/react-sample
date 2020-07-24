import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

interface Props {
    onLoad: () => void
}

function About(props: Props) {
    props.onLoad()

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
