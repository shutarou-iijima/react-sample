import React from "react";

interface Prop {
    name: string
    onChange: (value: string) => void
}

function Profile({ name, onChange }: Prop) {
    return (
        <div className="profile">
            <label>
                名前：
                <input
                    id="profile__input"
                    type="text"
                    value={name}
                    onChange={(event) => {
                        onChange(event.target.value)
                    }}
                />
            </label>
        </div>
    )
}

export default Profile
