import React from 'react';
import ReactDOM from 'react-dom';
import ReactHot from 'react-hot-loader';
import './src/sass/index.css';
import Root from './src/root.js';

ReactDOM.render(
	<Root />, 
	document.getElementById("root")
)

if (module.hot) {
	module.hot.accept('./src/root.js', ()=>{
		var NewRoot = require('./src/root.js')
		ReactDOM.render(
			<NewRoot />, 
			document.getElementById("root")
		)
	})
}
