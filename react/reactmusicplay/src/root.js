import React from 'react';
import Header from './header';
import Player from './page/player';
import MusicList from './page/musicList';
import jPlayer  from 'jplayer';
import MusicJson from '../static/musicJsonList';

class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={
			MusicJson:MusicJson[0],
			MusicListItem:MusicJson
		}
	}
	componentDidMount(){//在第一次渲染后调用，只在客户端。
		$("#player").jPlayer({
			ready:function(){
				$(this).jPlayer('setMedia',{
					mp3: 'https://m10.music.126.net/20181017205644/278ca56e4938bae44fca54390c801ffb/ymusic/5d63/5150/0851/5f226aac018cafc2cb248f7d28fbd5b4.mp3'
				}).jPlayer('play');
			},
			supplied:'mp3',//定义提供给jPlayer的格式。顺序表示优先级
			wmode:'window'//允许设置Flash 的wmode。 有效的wmode值有: window, transparent, opaque, direct, gpu
		});
	}
	render(){
		return(
			<div>
				<Header /> {/*头部样式*/}
				<div className="container">
					<MusicList MusicGetList={this.state.MusicListItem} atOnce={this.state.MusicJson.id-1}/>
					<Player MusicJson={this.state.MusicJson}/>
					<div id="player"></div>
				</div>
			</div>
		)
	}
}

export default Root;