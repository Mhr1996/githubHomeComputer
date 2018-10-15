import React from 'react';

class Timer extends React.Component{
	constructor(props){
		super(props);

		this.state={
			time:0,
			timeFunction:null,
			status:true
		}
		this.stop= this.stop.bind(this);
	}

	componentDidMount(){
		this.setState({
			time:0,
			timeFunction:setInterval(()=>this.setState({
				time:this.state.time+100,
				status:true
			}),1000)
		})
	}
	stop(){
		if (this.state.status) {
			clearInterval(this.state.timeFunction);
			this.setState({
				status:false
			})
		}else{
			this.setState({
				timeFunction:setInterval(()=>this.setState({
					time:this.state.time+100,
					status:true
				}),1000)
			})
		}
		
	}
	render(){
		return(
			<div>
				{this.state.time}
				<div onClick={this.stop}>{this.state.status?"暂停":"继续"}</div>
			</div>
		)
	}
}

export default Timer;