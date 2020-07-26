import React, { useState } from "react";

interface Props {
    onClick: (value: string) => void
}

function TweetArea({ onClick }: Props) {
    const [text, setText] = useState('')
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(true)

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
                        setDisabled(value.length === 0)
                        setCount(value.length)
                        setText(value)
                    }}
                    placeholder="何を呟く？"
                />
            </div>
            <div>
                <button
                    type="button"
                    className="tweetarea__submit"
                    disabled={disabled}
                    onClick={ () => {
                        if(count === 0) {
                            return
                        }

                        onClick(text)
                        setDisabled(true)
                        setCount(0)
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
