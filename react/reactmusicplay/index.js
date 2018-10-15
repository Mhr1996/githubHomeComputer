import React from 'react';
import ReactDOM from 'react-dom';
import ReactHot from 'react-hot-loader';
import './src/sass/index.css';
import FuB from './src/fuben.js';

ReactDOM.render(
	<FuB />, 
	document.getElementById("root")
)

if (module.hot) {
	module.hot.accept('./src/fuben.js', function() {
		var NewFuB = require('./src/fuben.js')
		ReactDOM.render(
			<NewFuB />, 
			document.getElementById("root")
		)
	})
}
