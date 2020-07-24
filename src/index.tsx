import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";
import { MenuItem } from "./components/Menu";

interface Props {

}

interface State {
    menuItems: MenuItem[]
}

class Twitter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            menuItems: [
                { to: '/', title: 'タイムライン', selected: true },
                { to: '/profile', title: 'プロフィール', selected: false },
                { to: '/about', title: 'このサイトについて', selected: false },
            ]
        }
    }

    render() {
        return (
            <Router>
                <div className="twitter">
                    <Header />
                    <Menu menuItems={this.state.menuItems}/>
                    <main>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path="/">
                                <Timeline />
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
