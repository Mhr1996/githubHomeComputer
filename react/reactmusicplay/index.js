import React from 'react';
import ReactDOM from 'react-dom';
import ReactHot from 'react-hot-loader';
import './src/sass/index.css';
import Timer from './src/fuben.js';

ReactDOM.render(
	<Timer />, 
	document.getElementById("root")
)

if (module.hot) {
	module.hot.accept('./src/fuben.js', function() {
		console.log("read me")
	})
}
