import React, { Component } from "react";
import logo from '../../../styles/scss/theme/images/logo.png'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import { login } from '../../../redux/actions/index'
import { connect } from "react-redux";
import { store } from 'react-notifications-component';
import { history } from '../../../helpers/history';


export class Login extends Component {
    constructor() {
        super();
        this.state =
            {
                email: '',
                password: ''
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let params = new Object();
        params.login = this.state.email;
        params.password = this.state.password;
        await this.props.login(params);

        if (this.props.isLogin) {
            store.addNotification({
                message: "User logged in successfully.",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            history.push('/Profile');
        }
    }

    render() {

        return (
            <Col>
                <h3>Login</h3>
                <p className="text-muted">Log into your account</p>

                <form name="Login_form" id='Login_form' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-xs-12">
                            <label htmlFor="my-email" className="sr-only">Email</label>
                            <input id="my-email" className="form-control input-group-lg" type="text"
                                name="email" title="Enter Email" placeholder="Your Email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-xs-12">
                            <label htmlFor="my-password" className="sr-only">Password</label>
                            <input id="my-password" className="form-control input-group-lg" type="password"
                                name="password" title="Enter password" placeholder="Password" onChange={this.handleChange} />
                        </div>
                    </div>

                    <p><a href="#">Forgot Password?</a></p>
                    <button className="btn btn-primary" type="submit">Login Now</button>
                </form>

            </Col >
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.isLogin
    };
}
export default connect(mapStateToProps, { login })(Login);