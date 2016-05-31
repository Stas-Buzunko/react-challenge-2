import { Link } from 'react-router';
import React from 'react';


const ActiveLinkHelper = ({
  to,
  currentLink,
  children,
  changeCurrentLink
}) => {
  if (currentLink === to) {
    return (
      <Link to={to} className="navbar-link link-active">{children}</Link>
    );
  }
  return (
    <Link 
      to={to} 
      className="navbar-link"
      onClick={e => { changeCurrentLink(to)}} 
    >
      {children}
    </Link>
  );
}

export default ActiveLinkHelper;