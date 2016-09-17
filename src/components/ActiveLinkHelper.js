import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const ActiveLinkHelper = ({ to, currentLink, children, changeCurrentLink }) => {
  if (currentLink === to) {
    return (
      <Link to={to} className="navbar-link link-active">{children}</Link>
    );
  }

  return (
    <Link
      to={to}
      className="navbar-link"
      onClick={() => changeCurrentLink(to)}
    >
      {children}
    </Link>
  );
};

export default ActiveLinkHelper;

ActiveLinkHelper.propTypes = {
  to: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
  children: PropTypes.any,
  changeCurrentLink: PropTypes.func.isRequired,
};
