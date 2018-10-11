import React from 'react';
import ReactDOM from 'react-dom';
import './src/sass/index.css';

class Dv extends React.Component{
	render(){
		return(
			<div>
				<h3>hello reactmusicplay</h3>
			</div>
		)
	}
}


ReactDOM.render(
	<Dv />, 
	document.getElementById("root")
)