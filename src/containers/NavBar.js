import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import ActiveLinkHelper from '../components/ActiveLinkHelper';


class NavBar extends Component {

  componentWillMount() {
    this.props.changeCurrentLink(this.props.currentUrl);
  }

  render() {
    const { changeCurrentLink, currentUrl } = this.props;
    return (
      <div className="container container-header">
        <nav className="navbar">
          <div className="navbar-header">
            <Link to={'/'} className="navbar-brand">
              <img src="images/logo-dark.svg" width="160px" height="32px" alt="" />
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <ActiveLinkHelper
              to="/" changeCurrentLink={changeCurrentLink}
              currentLink={currentUrl}
            >
              Create
            </ActiveLinkHelper>
            <ActiveLinkHelper
              to="/explore"
              changeCurrentLink={changeCurrentLink}
              currentLink={currentUrl}
            >
              Explore
            </ActiveLinkHelper>
            <ActiveLinkHelper
              to="/presets"
              changeCurrentLink={changeCurrentLink}
              currentLink={currentUrl}
            >
              Presets
            </ActiveLinkHelper>
            <ActiveLinkHelper
              to="/export"
              changeCurrentLink={changeCurrentLink}
              currentLink={currentUrl}
            >
              Export
            </ActiveLinkHelper>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLink: state.currentLink,
});


export default connect(mapStateToProps, actions)(NavBar);

NavBar.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  changeCurrentLink: PropTypes.func.isRequired,
};
