import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";
import Tweet from "./types/Tweet";
import MenuItem from "./types/MenuItem";
import User from "./types/User";

interface Props {

}

interface State {
    menuItems: MenuItem[]
    selectedMenuItemId: number
    users: User[]
    tweets: Tweet[]
}

class Twitter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            menuItems: [
                { id: 1, to: '/', title: 'タイムライン' },
                { id: 2, to: '/profile', title: 'プロフィール' },
                { id: 3, to: '/about', title: 'このサイトについて' },
            ],
            selectedMenuItemId: 1,
            users: [
                { id: 1, name: '名無しの権兵衛'},
                { id: 2, name: '太郎'},
                { id: 3, name: '次郎'},
                { id: 4, name: '三郎'},
            ],
            tweets: [
                { id: 1, userId: 2, value: "ラーメン食べたい"},
                { id: 2, userId: 3, value: "あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお"},
                { id: 3, userId: 4, value: "ラーメンとは、中華麺とスープを主とし、様々な具（チャーシュー、メンマ、味付け玉子、刻み葱、海苔など）を組み合わせた麺料理。漢字表記は拉麺、老麺[2]または柳麺。"},
            ]
        }
    }

    render() {
        return (
            <Router>
                <div className="twitter">
                    <Header />
                    <Menu
                        menuItems={this.state.menuItems}
                        onClick={(id: number) => { this.setState({ selectedMenuItemId: id }) }}
                        selectedMenuItemId={this.state.selectedMenuItemId}
                    />
                    <main>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/profile">
                                <Profile
                                    name={this.state.users[0].name}
                                    onChange={(value) => {
                                        const users = [...this.state.users]
                                        users[0].name = value
                                        this.setState({
                                            users: users
                                        })
                                    }}
                                />
                            </Route>
                            <Route path="/">
                                <Timeline
                                    users={this.state.users}
                                    tweets={this.state.tweets}
                                    onClick={ (value) => {
                                        const id = Math.max(...this.state.tweets.map(tweet => tweet.id)) + 1
                                        const tweet = {
                                            id: id,
                                            userId: 1,
                                            value: value,
                                        }
                                        const newTweets = [...this.state.tweets].concat(tweet)
                                        this.setState({
                                            tweets: newTweets
                                        })
                                    }}
                                />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Twitter />,
    document.getElementById('root')
);
