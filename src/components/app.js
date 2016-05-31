import React, { Component } from 'react';
import NavBar from '../containers/nav_bar';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
    	<div>
	    	<NavBar currentUrl={this.props.location.pathname} />
	    	{this.props.children}
	    	<Footer />
    	</div>
    );
  }
}