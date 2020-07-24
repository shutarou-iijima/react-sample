import React from "react";

interface Props {
    onLoad: () => void
}

function Timeline(props: Props) {
    props.onLoad()

    return (
        <div className="timeline">
            timeline
        </div>
    )
}

export default Timeline
