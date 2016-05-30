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
		<Link to={to} onClick={e => {
			changeCurrentLink(to)}} className="navbar-link">{children}</Link>
	);
}

export default ActiveLinkHelper;