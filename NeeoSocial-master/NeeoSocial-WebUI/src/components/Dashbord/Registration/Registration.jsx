import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from 'react-bootstrap'
import { register } from '../../../redux/actions/index'
import { store } from 'react-notifications-component';

import { COUNTRIES_DATA, DOB_YEAR, DOB_MONTH, DOB_DAY } from "./../../../redux/constants/action-types";

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            Email: '',
            password: '',
            dobDate: 1,
            dobMonth: 'Jan',
            dobYear: 2000,
            gender: 'Male',
            city: '',
            country: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    AlreadyAccountClickHandler() {
        event.preventDefault();
        this.props.onAlreadyAccountClick(true);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let params = new Object();
        params.fullName = { name: this.state.firstname, surname: this.state.lastname };
        params.email = this.state.Email;
        params.signIn = { login: this.state.Email, password: this.state.password };
        params.city = this.state.city;
        params.country = this.state.country;
        params.gender = this.state.gender;
        params.dob = this.state.dobDate + ' ' + this.state.dobMonth + ' ' + this.state.dobYear;

        this.props.register(params);

        store.addNotification({
            message: "User registered successfully.",
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
    }

    render() {

        let countryOptions = COUNTRIES_DATA.map((country, index) =>
            <option key={country.abbreviation} key={index}>{country.country}</option>
        );
        let dobYears = DOB_YEAR.map((year, index) =>
        <option key={year.value} key={index}>{year.year}</option>
    );
        let dobMonths = DOB_MONTH.map((month, index) =>
        <option key={month.abbreviation} key={index}>{month.month}</option>
        
    );
    let dobDays = DOB_DAY.map((day, index) =>
        <option key={day.value} key={index}>{day.Day}</option>
        
    );
    

        return (
            <Col>
                <h3>Register Now !!!</h3>
                <p className="text-muted">Be cool and join today. Meet millions</p>

                <form name="registration_form" id='registration_form' className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-xs-6">
                            <label htmlFor="firstname" className="sr-only">First Name</label>
                            <input id="firstname" className="form-control input-group-lg" type="text"
                                name="firstname" title="Enter first name" placeholder="First name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-xs-6">
                            <label htmlFor="lastname" className="sr-only">Last Name</label>
                            <input id="lastname" className="form-control input-group-lg" type="text"
                                name="lastname" title="Enter last name" placeholder="Last name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-xs-12">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" className="form-control input-group-lg" type="text"
                                name="Email" title="Enter Email" placeholder="Your Email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-xs-12">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" className="form-control input-group-lg" type="password"
                                name="password" title="Enter password" placeholder="Password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <p className="birth"><strong>Date of Birth</strong></p>
                        <div className="form-group col-sm-3 col-xs-6">
                            <label htmlFor="month" className="sr-only"></label>
                            <select className="form-control" name="dobDate" id="day" onChange={this.handleChange}>
                                {dobDays}
                            </select>
                        </div>
                        <div className="form-group col-sm-3 col-xs-6">
                            <label htmlFor="month" className="sr-only"></label>
                            <select className="form-control" id="month" name="dobMonth" onChange={this.handleChange}>
                                {dobMonths}
                            </select>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                            <label htmlFor="year" className="sr-only"></label>
                            <select className="form-control" id="year" name="dobYear" onChange={this.handleChange}>
                               {dobYears}
                            </select>
                        </div>
                    </div>
                    <div className="form-group gender">
                        <label className="radio-inline">
                            <input type="radio" name="gender" value="Male" checked={this.state.gender == 'Male'} onChange={this.handleChange} /> Male
                    </label>
                        <label className="radio-inline">
                            <input type="radio" name="gender" value="Female" checked={this.state.gender == 'Female'} onChange={this.handleChange} /> Female
                    </label>
                    </div>
                    <div className="row">
                        <div className="form-group col-xs-6">
                            <label htmlFor="city" className="sr-only">City</label>
                            <input id="city" className="form-control input-group-lg reg_name" type="text"
                                name="city" title="Enter city" placeholder="Your city" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-xs-6">
                            <label htmlFor="country" className="sr-only"></label>
                            <select className="form-control" id="country" name="country" onChange={this.handleChange}>
                                {countryOptions}
                            </select>
                        </div>
                    </div>
                    <p><a href="#" onClick={this.AlreadyAccountClickHandler.bind(this)}>Already have an account?</a></p>
                    <button className="btn btn-primary" type="submit">Register Now</button>
                </form>

            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        register: state.register
    };
}
export default connect(mapStateToProps, { register })(Registration);