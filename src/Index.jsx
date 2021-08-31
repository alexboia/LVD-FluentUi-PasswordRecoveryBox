import React from 'react';
import ReactDOM from 'react-dom';

import { initializeIcons } from '@fluentui/react';

import Root from './Root.jsx';

window.addEventListener('load', function (loadEvent) {
	initializeIcons();
	ReactDOM.render(<Root />, document.getElementById('root'));
});