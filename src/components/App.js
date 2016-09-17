import React, { PropTypes } from 'react';
import NavBar from '../containers/NavBar';
import Footer from './Footer';

const App = ({ children, location }) => (
  <div>
    <NavBar currentUrl={location.pathname} />
    {children}
    <Footer />
  </div>
);

export default App;

App.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};
