import React from "react";
import TweetArea from "../components/TweetArea";
import TweetCard from "../components/TweetCard";

function Timeline() {

    return (
        <div className="timeline">
            <TweetArea />
            <div className="tweetcard__container">
                <TweetCard name="太郎" value="hello" />
                <TweetCard name="次郎" value="あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお" />
                <TweetCard name="三郎" value="void(0)と書いていた歴史的な理由がありましたが、現在では使用されなくなっています。より魅力的なページ作成のためには最新のコーディングのトレンドにも精通していなければなりませんね。コーディングのトレンドに歴史があることを知ると、どのように書くべきなのかがより一層わかるようになります。" />
            </div>
        </div>
    )
}

export default Timeline
