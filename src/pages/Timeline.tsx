import React from "react";
import TweetArea from "../components/TweetArea";
import TweetCard from "../components/TweetCard";
import Tweet from "../types/Tweet";

export interface Props {
    tweets: Tweet[]
    onClick: (value: string) => void
}

function Timeline({ tweets, onClick }: Props) {

    const tweetCards = [...tweets]
        .sort((a, b) => {
            return b.id - a.id
        })
        .map(tweet => {
            return <TweetCard name={tweet.name} value={tweet.value} key={tweet.id}/>
        })

    return (
        <div className="timeline">
            <TweetArea onClick={onClick}/>
            <div className="tweetcard__container">
                {tweetCards}
            </div>
        </div>
    )
}

export default Timeline
