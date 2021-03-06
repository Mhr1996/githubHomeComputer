import React from 'react';
import ReactDOM from 'react-dom';
import ReactHot from 'react-hot-loader';
import './src/sass/index.scss';
import Root from './src/root.js';

ReactDOM.render(
	<Root />, 
	document.getElementById("root")
)

if (module.hot) {//热更新 有改变即加载
	module.hot.accept('./src/root.js', ()=>{
		var NewRoot = require('./src/root.js')
		ReactDOM.render(
			<NewRoot />, 
			document.getElementById("root")
		)
	})
}
