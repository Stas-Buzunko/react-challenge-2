import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CreatePage from './containers/CreatePage';
import ExplorePage from './containers/ExplorePage';
import ExportPage from './containers/ExportPage';
import PresetsPage from './containers/PresetsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CreatePage} />
    <Route path="explore" component={ExplorePage} />
    <Route path="export" component={ExportPage} />
    <Route path="presets" component={PresetsPage} />
  </Route>
);
