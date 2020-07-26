import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Timeline from "../pages/Timeline";
import MenuItem from "../types/MenuItem";
import User from "../types/User";
import Tweet from "../types/Tweet";

function Twitter() {
    const [menuItems] = useState<MenuItem[]>([
        { id: 1, to: '/', title: 'タイムライン' },
        { id: 2, to: '/profile', title: 'プロフィール' },
        { id: 3, to: '/about', title: 'このサイトについて' },
    ])

    const [selectedMenuItemId, setSelectedMenuItemId] = useState<number>(1)

    const [users, setUsers] = useState<User[]>([
        { id: 1, name: '名無しの権兵衛'},
        { id: 2, name: '太郎'},
        { id: 3, name: '次郎'},
        { id: 4, name: '三郎'},
    ])

    const [tweets, setTweets] = useState<Tweet[]>([
        { id: 1, userId: 2, value: "ラーメン食べたい"},
        { id: 2, userId: 3, value: "あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお"},
        { id: 3, userId: 4, value: "ラーメンとは、中華麺とスープを主とし、様々な具（チャーシュー、メンマ、味付け玉子、刻み葱、海苔など）を組み合わせた麺料理。漢字表記は拉麺、老麺[2]または柳麺。"},
    ])

    return (
        <Router>
            <div className="twitter">
                <Header />
                <Menu
                    menuItems={menuItems}
                    onClick={(id: number) => { setSelectedMenuItemId(id) }}
                    selectedMenuItemId={selectedMenuItemId}
                />
                <main>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/profile">
                            <Profile
                                name={users[0].name}
                                onChange={(value) => {
                                    const newUsers = [...users]
                                    newUsers[0].name = value
                                    setUsers(newUsers)
                                }}
                            />
                        </Route>
                        <Route path="/">
                            <Timeline
                                users={users}
                                tweets={tweets}
                                onClick={ (value) => {
                                    const id = Math.max(...tweets.map(tweet => tweet.id)) + 1
                                    const tweet = {
                                        id: id,
                                        userId: 1,
                                        value: value,
                                    }
                                    const newTweets = [...tweets].concat(tweet)
                                    setTweets(newTweets)
                                }}
                            />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default Twitter
