import React, { useState } from "react";

interface Props {
    onClick: (value: string) => void
}

function TweetArea({ onClick }: Props) {
    const [text, setText] = useState('aiueo')

    return (
        <div className="tweetarea">
            <div>
                <textarea
                    className="tweetarea__textarea"
                    value={text}
                    onChange={ (event) => {
                        setText(event.target.value)
                    }}
                />
            </div>
            <div>
                <button
                    type="button"
                    className="tweetarea__submit"
                    onClick={ () => {
                        onClick(text)
                    }}
                >
                    呟く
                </button>
            </div>
        </div>
    )
}

export default TweetArea
