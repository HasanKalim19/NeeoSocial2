import React, { Component } from "react";
import { Col } from 'react-bootstrap'
import { connect } from "react-redux";
import { userBasicInformation } from "../../../../redux/actions/index";
import { COUNTRIES_DATA, DOB_DAY, DOB_MONTH, DOB_YEAR } from "../../../../redux/constants/action-types";


export class BasicUserinformation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        await this.props.userBasicInformation();
    }

    handleChangeElement() {

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

        console.log(this.props.user_basic_information);

        return (
            <Col>
                <div id="page-contents">
                    <div className="row">
                        <div className="col-md-3">

                            <ul className="edit-menu">
                                <li className="active"><i className="icon ion-ios-information-outline"></i><a href="edit-profile-basic.html">Basic Information</a></li>
                                <li><i className="icon ion-ios-briefcase-outline"></i><a href="edit-profile-work-edu.html">Education and Work</a></li>
                                <li><i className="icon ion-ios-heart-outline"></i><a href="edit-profile-interests.html">My Interests</a></li>
                                <li><i className="icon ion-ios-settings"></i><a href="edit-profile-settings.html">Account Settings</a></li>
                                <li><i className="icon ion-ios-locked-outline"></i><a href="edit-profile-password.html">Change Password</a></li>
                            </ul>

                        </div>
                        <div className="col-md-7">

                            <div className="edit-profile-container">
                                <div className="block-title">
                                    <h4 className="grey"><i className="icon ion-android-checkmark-circle"></i>Edit basic information</h4>
                                    <div className="line"></div>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                    <div className="line"></div>
                                </div>
                                <div className="edit-block">
                                    <form name="basic-info" id="basic-info" className="form-inline">
                                        <div className="row">
                                            <div className="form-group col-xs-6">
                                                <label htmlFor="firstname">First name</label>

                                                <input id="firstname" className="form-control input-group-lg" type="text" name="firstname" title="Enter first name"
                                                    placeholder="First name" value={(Object.keys(this.props.user_basic_information).length > 0) ? this.props.user_basic_information.fullName.name : ""}
                                                    onChange={this.handleChangeElement} />
                                            </div>
                                            <div className="form-group col-xs-6">
                                                <label htmlFor="lastname" className="">Last name</label>
                                                <input id="lastname" className="form-control input-group-lg" type="text" name="lastname" title="Enter last name"
                                                    placeholder="Last name" value={(Object.keys(this.props.user_basic_information).length > 0) ? this.props.user_basic_information.fullName.surname : ""}
                                                    onChange={this.handleChangeElement} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xs-12">
                                                <label htmlFor="email">My email</label>
                                                <input id="email" className="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="My Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <p className="custom-label"><strong>Date of Birth</strong></p>
                                            <div className="form-group col-sm-3 col-xs-6">
                                                <label htmlFor="month" className="sr-only"></label>
                                                <select className="form-control" id="day">
                                                   {dobDays}
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-3 col-xs-6">
                                                <label htmlFor="month" className="sr-only"></label>
                                                <select className="form-control" id="month">
                                                   {dobMonths} 
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-6 col-xs-12">
                                                <label htmlFor="year" className="sr-only"></label>
                                                <select className="form-control" id="year">
                                                    {dobYears}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group gender">
                                            <span className="custom-label"><strong>I am a: </strong></span>
                                            <label className="radio-inline">
                                                <input type="radio" name="optradio" />Male
                  </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="optradio" />Female
                  </label>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xs-6">
                                                <label htmlFor="city"> My city</label>
                                                <input id="city" className="form-control input-group-lg" type="text" name="city" title="Enter city" placeholder="Your city" />
                                            </div>
                                            <div className="form-group col-xs-6">
                                                <label htmlFor="country">My country</label>
                                                <select className="form-control" id="country">
                                                    {countryOptions}
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                        <div className="form-group col-xs-12">
                                            <label htmlFor="my-info">About me</label>
                                            <textarea id="my-info" name="information" className="form-control" placeholder="Some texts about me" rows="4" cols="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</textarea>
                                        </div>
                                    </div> */}
                                        <button className="btn btn-primary">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 static">

                            <div id="sticky-sidebar">
                                <h4 className="grey">Sarah's activity</h4>
                                <div className="feed-item">
                                    <div className="live-activity">
                                        <p><a href="#" className="profile-link">Sarah</a> Commended on a Photo</p>
                                        <p className="text-muted">5 mins ago</p>
                                    </div>
                                </div>
                                <div className="feed-item">
                                    <div className="live-activity">
                                        <p><a href="#" className="profile-link">Sarah</a> Has posted a photo</p>
                                        <p className="text-muted">an hour ago</p>
                                    </div>
                                </div>
                                <div className="feed-item">
                                    <div className="live-activity">
                                        <p><a href="#" className="profile-link">Sarah</a> Liked her friend's post</p>
                                        <p className="text-muted">4 hours ago</p>
                                    </div>
                                </div>
                                <div className="feed-item">
                                    <div className="live-activity">
                                        <p><a href="#" className="profile-link">Sarah</a> has shared an album</p>
                                        <p className="text-muted">a day ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}
function mapStateToProps(state) {
    return {
        user_basic_information: state.user_basic_information
    };
}
export default connect(
    mapStateToProps,
    {
        userBasicInformation
    }
)(BasicUserinformation);