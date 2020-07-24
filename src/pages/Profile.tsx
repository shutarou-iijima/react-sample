import React from "react";

interface Props {
    onLoad: () => void
}

function Profile(props: Props) {
    props.onLoad()

    return (
        <div className="profile">
            profile
        </div>
    )
}

export default Profile
