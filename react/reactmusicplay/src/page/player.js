import React from 'react';
import jPlayer  from 'jplayer';
import Progress from '../progress.js';
import { Link } from 'react-router-dom'
import Pubsub from 'pubsub-js';

let musicTime=null;
class Player extends React.Component{
	constructor(props){
		super(props);

		this.state={
			progress:0,
			volume:0,
			playBtn:true
		}
		this.props.MusicJson.cover=require('../../static/'+(this.props.MusicJson.cover.match(/^..\/..\/static\/(\S*)\.jpg/)[1])+'.jpg');

		this.modifyProgress=this.modifyProgress.bind(this);
		this.modifyVolume=this.modifyVolume.bind(this);
		this.btnFz=this.btnFz.bind(this);

	}
	playPrev(){
		Pubsub.publish('PLAY_Prev');
	}
	playNext(){
		Pubsub.publish('PLAY_Next');
	}
	componentDidMount(){//第一次渲染完成后触发 客户端
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {// 当当前事件被改变时触发。（重放的时候两个事件相隔250ms）
			musicTime=e.jPlayer.status.duration;//Number : The duration of the media 翻译为：媒体持续时间
			this.setState({
				volume:e.jPlayer.options.volume*100,
				progress:e.jPlayer.status.currentPercentAbsolute//当前时间为百分之一的持续时间
			});
		})

	}
	componentWillUnMount(){ //在组件从DOM中移除时调用
		$("#player").unbind($.jPlayer.event.timeupdate);
	}
	modifyProgress(second){
		$("#player").jPlayer('play', musicTime * second);//总长度 * 跳转的百分比
	}
	modifyVolume(volume){
		$("#player").jPlayer('volume', volume);
	}
	btnFz(){
		if (this.state.playBtn) {
			$("#player").jPlayer('pause');
		}else{
			$("#player").jPlayer('play');
		}
		this.setState({
			playBtn:!this.state.playBtn
		})
	}
	render(){
		return(
			<div>
				<div className="leftSingInfo">
					<Link to='/list' className="listTitle">音乐列表</Link>
					<p className="name">{this.props.MusicJson.title}</p>
					<p className="singer">{this.props.MusicJson.artist}</p>
					<div className="children_1">
						<span className="second">2:00</span><span className="vol">音量</span>
						<div style={{width:`300px`,display:`inline-table`}}>
							<Progress progress={this.state.volume} childrenProgress={this.modifyVolume} barColor="#ccc"></Progress>
						</div>
					</div>
					<div className="children_2"><div className="left" onClick={this.playPrev}>←</div><div className="playBtn" onClick={this.btnFz}>{this.state.playBtn?'暂停':'播放'}</div><div className="right" onClick={this.playNext}>→</div></div>
				</div>
				<div className="imgInfo">
					{/*<img src={require('../../static/6672936069046297.jpg')} alt="歌名" />*/}
					<img src={this.props.MusicJson.cover} alt={this.props.MusicJson.title} />
				</div>
				<Progress progress={this.state.progress} childrenProgress={this.modifyProgress}  barColor="red"></Progress>
			</div>
		)
	}
}

export default Player;