import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { changeCurrentLink } from '../actions/';
import ActiveLinkHelper from '../components/active_link_helper';


class NavBar extends Component {

  componentWillMount() {
    console.log(this.props.currentUrl);
    this.props.changeCurrentLink(this.props.currentUrl);
  }

  render() {
    return (
      <div className="container container-header">
        <nav className="navbar">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">
              <img src="images/logo-dark.svg" width="160px" height="32px"/>
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <ActiveLinkHelper 
              to="/" changeCurrentLink={this.props.changeCurrentLink} 
              currentLink={this.props.currentUrl}
            >
              Create
            </ActiveLinkHelper>
            <ActiveLinkHelper 
              to="/explore" 
              changeCurrentLink={this.props.changeCurrentLink} 
              currentLink={this.props.currentUrl}
            >
              Explore
            </ActiveLinkHelper>
            <ActiveLinkHelper 
              to="/presets" 
              changeCurrentLink={this.props.changeCurrentLink} 
              currentLink={this.props.currentUrl}
            >
              Presets
            </ActiveLinkHelper>
            <ActiveLinkHelper 
              to="/export" 
              changeCurrentLink={this.props.changeCurrentLink} 
              currentLink={this.props.currentUrl}
            >
              Export
            </ActiveLinkHelper> 
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLink: state.currentLink
  }
}

export default connect(mapStateToProps, {changeCurrentLink} )(NavBar)