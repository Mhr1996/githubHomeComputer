import React from 'react';
import  jPlayer  from 'jplayer';
import Progress from '../progress';

let musicTime=null;
class Player extends React.Component{
	constructor(props){
		super(props);

		this.state={
			progress:'-',
			MustiList:props.MustiList
		}

		this.modifyProgress=this.modifyProgress.bind(this);
		this.imgSrc=this.imgSrc.bind(this);
	}
	componentDidMount(){//第一次渲染完成后触发 客户端
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {// 当当前事件被改变时触发。（重放的时候两个事件相隔250ms）
			musicTime=e.jPlayer.status.duration;//Number : The duration of the media 翻译为：媒体持续时间
			this.setState({
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
	imgSrc(s){
	}
	render(){
		return(
			<div>
				<div className="leftSingInfo">
					<p className="listTitle">音乐列表</p>
					<p className="name">{this.props.MustiList.title}</p>
					<p className="singer">{this.props.MustiList.artist}</p>
					<div className="children_1"><span className="second">2:00</span><span className="vol">音量</span></div>
					<div className="children_2"><div className="left">←</div><div className="playBtn">播放</div><div className="right">→</div></div>
				</div>
				<div className="imgInfo">
					{/*<img src={`${this.props.MustiList.cover}`} alt={this.props.MustiList.title}/>*/}
					<img src={require('../../static/6672936069046297.jpg')} alt="歌名" />
					{/*<img src={this.imgSrc(this.props.MustiList.cover)} alt="歌名" />*/}
				</div>
				<Progress progress={this.state.progress} childrenProgress={this.modifyProgress}/>
			</div>
		)
	}
}

export default Player;