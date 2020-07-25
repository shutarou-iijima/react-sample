import React from "react";

function TweetArea() {

    return (
        <div className="tweetarea">
            <div>
                <textarea className="timeline__textarea" />
            </div>
            <div>
                <button type="button" className="timeline__submit">呟く</button>
            </div>
        </div>
    )
}

export default TweetArea
