import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import store from "./redux/store/index";
import { Provider } from "react-redux";

import ReactNotification from 'react-notifications-component'
import { Router, Route } from 'react-router-dom';
import { history } from './helpers/history';

import './styles/scss/main.scss';
import 'react-notifications-component/dist/theme.css'

import Header from './components/Header/Header';
import Dashboard from "./components/Dashbord/index";
import Profile from "./components/Dashbord/Profile/Profile";
import Feed from './components/Dashbord/Feeds/Feed';



render(
    <div className="app-container">
        <Header />
        <ReactNotification />
        <Provider store={store}>
            <Router history={history}>
                <Route exact path="/" component={Dashboard} />
                <Route path="/profile" component={Profile} />
                <Route path="/Feed" component={Feed} />
            </Router>
        </Provider>
    </div>,
    document.getElementById("root")
);