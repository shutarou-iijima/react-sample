import React, { useState } from "react";

interface Props {
    onClick: (value: string) => void
}

function TweetArea({ onClick }: Props) {
    const [text, setText] = useState('')
    const [count, setCount] = useState(0)

    return (
        <div className="tweetarea">
            <div>
                {count} / 140
            </div>
            <div>
                <textarea
                    className="tweetarea__textarea"
                    value={text}
                    onChange={ (event) => {
                        const value = event.target.value
                        if (value.length > 140) {
                            return
                        }
                        setCount(event.target.value.length)
                        setText(event.target.value)
                    }}
                    placeholder="何を呟く？"
                />
            </div>
            <div>
                <button
                    type="button"
                    className="tweetarea__submit"
                    onClick={ () => {
                        onClick(text)
                        setText('')
                    }}
                >
                    呟く
                </button>
            </div>
        </div>
    )
}

export default TweetArea
