import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';

import App from './components/app';
import CreatePage from './components/create_page';
import ExplorePage from './components/explore_page';
import ExportPage from './components/export_page';
import PresetsPage from './components/presets_page';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={CreatePage} />
		<Route path='explore' component={ExplorePage} />
		<Route path='export' component={ExportPage} />
		<Route path='presets' component={PresetsPage} />
	</Route>
);