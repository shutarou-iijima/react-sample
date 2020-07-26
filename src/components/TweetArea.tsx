import React from "react";

function TweetArea() {

    return (
        <div className="tweetarea">
            <div>
                <textarea className="tweetarea__textarea" />
            </div>
            <div>
                <button type="button" className="tweetarea__submit">呟く</button>
            </div>
        </div>
    )
}

export default TweetArea
