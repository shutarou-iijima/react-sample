import React, { useState } from "react";
import TweetArea from "../components/TweetArea";
import TweetCard from "../components/TweetCard";

interface Tweet {
    id: number
    name: string
    value: string
}

function Timeline() {
    const [tweets, setTweets] = useState<Tweet[]>([
        { id: 3, name: '太郎', value: "hello"},
        { id: 2, name: '次郎', value: "あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお"},
        { id: 1, name: '三郎', value: "void(0)と書いていた歴史的な理由がありましたが、現在では使用されなくなっています。より魅力的なページ作成のためには最新のコーディングのトレンドにも精通していなければなりませんね。コーディングのトレンドに歴史があることを知ると、どのように書くべきなのかがより一層わかるようになります。"},
    ])

    const tweetCards = [...tweets]
        .sort((a, b) => {
            return b.id - a.id
        })
        .map(tweet => {
            return <TweetCard name={tweet.name} value={tweet.value} key={tweet.id}/>
        })

    return (
        <div className="timeline">
            <TweetArea
                onClick={ (value) => {
                    const id = Math.max(...tweets.map(tweet => tweet.id)) + 1
                    const tweet = {
                        id: id,
                        name: '名無しの権兵衛',
                        value: value,
                    }
                    const newTweets = [...tweets].concat(tweet)
                    setTweets(newTweets)
                }}
            />
            <div className="tweetcard__container">
                {tweetCards}
            </div>
        </div>
    )
}

export default Timeline
