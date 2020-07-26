import React from "react";
import TweetArea from "../components/TweetArea";
import TweetCard from "../components/TweetCard";
import Tweet from "../types/Tweet";
import User from "../types/User";

export interface Props {
    users: User[]
    tweets: Tweet[]
    onClick: (value: string) => void
}

function Timeline({ users, tweets, onClick }: Props) {

    const tweetCards = [...tweets]
        .sort((a, b) => {
            return b.id - a.id
        })
        .map(tweet => {
            const name = users.find(user => tweet.userId === user.id)!.name
            return <TweetCard name={name} value={tweet.value} key={tweet.id}/>
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
