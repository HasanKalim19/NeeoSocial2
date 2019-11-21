import React, { Component } from "react";
import { Container, Row, Col, Tab } from 'react-bootstrap'

import Registration from './Registration/Registration.jsx'
import Login from './Login/Login.jsx'

export class Index extends Component {
    constructor() {
        super();
        this.state = {
            registerTabActive: true,
            loginTabActive: false,
            registerClassName: 'active',
            loginClassName: ''
        }
        
        this.registerTabClickHandler = this.registerTabClickHandler.bind(this);
        this.logintabClickHandler = this.logintabClickHandler.bind(this);
    }

    componentDidMount() {         
        document.getElementById("spinner-wrapper").style.display = "none";
    }

    handleAlreadyAccountClick = (val) => {
        this.setState({
            registerTabActive: false,
            loginTabActive: true,
            registerClassName: '',
            loginClassName: 'active'
        });
    }

    logintabClickHandler() {
        event.preventDefault();
        this.setState({
            registerTabActive: false,
            loginTabActive: true,
            registerClassName: '',
            loginClassName: 'active'
        });

    }
    registerTabClickHandler() {
        event.preventDefault();
        this.setState({
            registerTabActive: true,
            loginTabActive: false,
            registerClassName: 'active',
            loginClassName: ''
        });
    }

    render() {      
        return (
            <div id="lp-register">
                <Container className="wrapper">
                    <Row>
                        <Col sm={5}>
                            <div className="intro-texts">
                                <h1 className="text-white">Make Cool Friends !!!</h1>
                                <p>Friend Finder is a social network template that can be used to connect people. The template
                                    offers
                            Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br />
                                    <br />Why are you
                            waiting for? Buy it now.</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </Col>
                        <Col sm={{ span: 6, offset: 1 }}>
                            <div className="reg-form-container">
                                <div className="reg-options">
                                    <ul className="nav nav-tabs">
                                        <li className={this.state.registerClassName} key="register"><a href='#' onClick={this.registerTabClickHandler} data-toggle="tab">Register</a></li>
                                        <li className={this.state.loginClassName} key="login"><a href='#' onClick={this.logintabClickHandler} data-toggle="tab">Login</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content" style={{ display: this.state.registerTabActive ? 'block' : 'none' }}>
                                    <div className="tab-pane active">
                                        <Registration onAlreadyAccountClick={this.handleAlreadyAccountClick} />
                                    </div>
                                </div>
                                <div className="tab-content" style={{ display: this.state.loginTabActive ? 'block' : 'none' }}>
                                    <div className="tab-pane active">
                                        <Login />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index; 