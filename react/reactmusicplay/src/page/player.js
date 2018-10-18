import React from 'react';
import  jPlayer  from 'jplayer';
import Progress from '../progress';

let musicTime=null;
class Player extends React.Component{
	constructor(props){
		super(props);

		this.state={
			progress:'-'
		}

		this.modifyProgress=this.modifyProgress.bind(this);
	}
	componentDidMount(){
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			musicTime=e.jPlayer.status.duration;
			this.setState({
				progress:e.jPlayer.status.currentPercentAbsolute
			});
		})
	}
	componentWillUnMount(){
		$("#player").unbind($.jPlayer.event.timeupdate);
	}
	modifyProgress(second){
		$("#player").jPlayer('play', musicTime * second);
	}
	render(){
		return(
			<div>
				<div className="leftSingInfo">
					<p className="listTitle">音乐列表</p>
					<p className="name">音乐名称</p>
					<p className="singer">歌手</p>
					<div className="children_1"><span className="second">2:00</span><span className="vol">音量</span></div>
					<div className="children_2"><div className="left">←</div><div className="playBtn">播放</div><div className="right">→</div></div>
				</div>
				<div className="imgInfo">
					<img src={require('../../static/1.jpg')} alt="歌名" />
				</div>
				<Progress progress={this.state.progress} childrenProgress={this.modifyProgress}/>
			</div>
		)
	}
}

export default Player;