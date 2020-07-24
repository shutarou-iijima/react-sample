import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Timeline from "./pages/Timeline";

ReactDOM.render(
    <Router>
        <div className="twitter">
            <Header />
            <Menu />
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
    </Router>,
    document.getElementById('root')
);
