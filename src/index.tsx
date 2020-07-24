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
                { id: 1, to: '/', title: 'タイムライン', selected: true },
                { id: 2, to: '/profile', title: 'プロフィール', selected: false },
                { id: 3, to: '/about', title: 'このサイトについて', selected: false },
            ]
        }
    }

    setSelectedMenu(id: number) {
        const nowId = this.state.menuItems.find(menuItem => menuItem.selected)!.id
        if (id === nowId) {
            return
        }

        const menuItems = [...this.state.menuItems]
        menuItems.forEach(menuItem => {
            menuItem.selected = menuItem.id === id
        })
        this.setState({
            menuItems: menuItems
        })
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
                                <About onLoad={ () => { this.setSelectedMenu(3) } } />
                            </Route>
                            <Route path="/profile">
                                <Profile onLoad={ () => { this.setSelectedMenu(2) } } />
                            </Route>
                            <Route path="/">
                                <Timeline onLoad={ () => { this.setSelectedMenu(1) } }/>
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
