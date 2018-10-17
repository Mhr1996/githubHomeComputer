import React from 'react';

class Progress extends React.Component{
	constructor(props){
		super(props);

		this.changeprogress=this.changeprogress.bind(this);
	}
	changeprogress(e){
		let prB=this.refs.prB; //原生的dom节点 通过设置div的ref 
		let progress=(e.clientX - prB.getBoundingClientRect().left) / prB.clientWidth;
		this.props.childrenProgress(progress)
	}
	render(){
		return(
			<div className="progress" onClick={this.changeprogress} ref="prB">
				<div className="progressBar" style={{width:`${this.props.progress}%`}}></div>
			</div>
		)
	}
}

export default Progress;