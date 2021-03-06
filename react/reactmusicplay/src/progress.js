import React from 'react';

class Progress extends React.Component{
	constructor(props){
		super(props);

		this.changeprogress=this.changeprogress.bind(this);
	}
	changeprogress(e){//ref可以获取到原生的dom节点 通过设置ref 
		let prB=this.prB;
		//点击的x点-开始位置=以播放长度  以播放长度/ 总长度 = 想要跳转的百分比 
		let progress=(e.clientX - prB.getBoundingClientRect().left) / prB.clientWidth; //getBoundingClientRect() 方法返回的一组矩形的集合  left right top bottom
		this.props.childrenProgress && this.props.childrenProgress(progress);
	}
	render(){
		return(
			<div className="progress" onClick={this.changeprogress} ref={(c) => { this.prB = c; }}>
				<div className="progressBar" style={{width:`${this.props.progress}%`,backgroundColor:`${this.props.barColor}`} }></div>
			</div>
		)
	}
}

export default Progress;