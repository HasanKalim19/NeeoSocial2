import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import { connect } from "react-redux";
import { history } from '../../../helpers/history';


export class Feed extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
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
            <div id="page-contents">
                <Container>
                    <div class="col-md-3 static">
                        <div class="profile-card">
                            <img src="http://placehold.it/300x300" alt="user" class="profile-photo" />
                            <h5><a href="timeline.html" class="text-white">Sarah Cruiz</a></h5>
                            <a href="#" class="text-white"><i class="ion ion-android-person-add"></i> 1,299 followers</a>
                        </div>
                        <ul class="nav-news-feed">
                            <li><i class="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
                            <li><i class="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
                            <li><i class="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
                            <li><i class="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
                            <li><i class="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
                            <li><i class="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
                        </ul>
                    </div>

                    <div class="col-md-7">
                        <div class="create-post">
                            <div class="row">
                                <div class="col-md-7 col-sm-7">
                                    <div class="form-group">
                                        <img src="http://placehold.it/300x300" alt="" class="profile-photo-md" />
                                        <textarea name="texts" id="exampleTextarea" cols="30" rows="1" class="form-control" placeholder="Write what you wish"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-5 col-sm-5">
                                    <div class="tools">
                                        <ul class="publishing-tools list-inline">
                                            <li><a href="#"><i class="ion-compose"></i></a></li>
                                            <li><a href="#"><i class="ion-images"></i></a></li>
                                            <li><a href="#"><i class="ion-ios-videocam"></i></a></li>
                                            <li><a href="#"><i class="ion-map"></i></a></li>
                                        </ul>
                                        <button class="btn btn-primary pull-right">Publish</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="post-content">
                            <img src="http://placehold.it/1920x1280" alt="post-image" class="img-responsive post-image" />
                            <div class="post-container">
                                <img src="http://placehold.it/300x300" alt="user" class="profile-photo-md pull-left" />
                                <div class="post-detail">
                                    <div class="user-info">
                                        <h5><a href="timeline.html" class="profile-link">Alexis Clark</a> <span class="following">following</span></h5>
                                        <p class="text-muted">Published a photo about 3 mins ago</p>
                                    </div>
                                    <div class="reaction">
                                        <a class="btn text-green"><i class="icon ion-thumbsup"></i> 13</a>
                                        <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 0</a>
                                    </div>
                                    <div class="line-divider"></div>
                                    <div class="post-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                                    </div>
                                    <div class="line-divider"></div>
                                    <div class="post-comment">
                                        <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm" />
                                        <p><a href="timeline.html" class="profile-link">Diana </a><i class="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                    <div class="post-comment">
                                        <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm" />
                                        <p><a href="timeline.html" class="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                    <div class="post-comment">
                                        <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm" />
                                        <input type="text" class="form-control" placeholder="Post a comment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2 static">
                        <div class="suggestions" id="sticky-sidebar">
                            <h4 class="grey">Who to Follow</h4>
                            <div class="follow-user">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />
                                <div>
                                    <h5><a href="timeline.html">Diana Amber</a></h5>
                                    <a href="#" class="text-green">Add friend</a>
                                </div>
                            </div>
                            <div class="follow-user">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />
                                <div>
                                    <h5><a href="timeline.html">Cris Haris</a></h5>
                                    <a href="#" class="text-green">Add friend</a>
                                </div>
                            </div>
                            <div class="follow-user">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />
                                <div>
                                    <h5><a href="timeline.html">Brian Walton</a></h5>
                                    <a href="#" class="text-green">Add friend</a>
                                </div>
                            </div>
                            <div class="follow-user">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />
                                <div>
                                    <h5><a href="timeline.html">Olivia Steward</a></h5>
                                    <a href="#" class="text-green">Add friend</a>
                                </div>
                            </div>
                            <div class="follow-user">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />
                                <div>
                                    <h5><a href="timeline.html">Sophia Page</a></h5>
                                    <a href="#" class="text-green">Add friend</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        );
    }
}

export default Feed;