import React from 'react';

class Timer extends React.Component{
	constructor(props){
		super(props);

		this.state={}
	}
	render(){
		return(
			<div>
				<img src={require('../static/wy.png')}/>
				<h1 style={{fontSize:'18px'}}>React music player</h1>
			</div>
		)
	}
}

export default Timer;