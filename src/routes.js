import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';

import App from './components/app';
import CreatePage from './containers/create_page';
import ExplorePage from './containers/explore_page';
import ExportPage from './containers/export_page';
import PresetsPage from './containers/presets_page';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={CreatePage} />
    <Route path='explore' component={ExplorePage} />
    <Route path='export' component={ExportPage} />
    <Route path='presets' component={PresetsPage} />
  </Route>
);