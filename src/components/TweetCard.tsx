import React from "react";

export interface Props {
    name: string
    value: string
}

function TweetCard({ name, value }: Props) {
    return (
        <div className="tweetcard">
            <div className="tweetcard__name">
                {name}
            </div>
            <div className="tweetcard__value">
                {value}
            </div>
        </div>
    )
}

export default TweetCard
