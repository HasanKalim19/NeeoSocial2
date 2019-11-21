import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import { connect } from "react-redux";
import { history } from '../../../helpers/history';


import { Timeline } from './Timeline.jsx';
import { ProfileBasicEdit } from './ProfileBasicEdit.jsx'
import BasicUserinformation from './BasicUserinformation/BasicUserinformation';

export class Profile extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });

        this.state = {
        }
    }

    componentDidMount() {
        document.getElementById("spinner-wrapper").style.display = "none";
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <Timeline />
                </div>
                <div className="row">
                    <BasicUserinformation></BasicUserinformation>
                </div>
            </Container >
        );
    }
}


export default connect(null)(Profile);