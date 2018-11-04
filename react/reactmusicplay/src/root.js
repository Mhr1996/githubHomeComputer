import React from 'react';
import Header from './header';
import Player from './page/player';
import MusicList from './page/musicList';
import jPlayer  from 'jplayer';
import MusicJson from '../static/musicJsonList';

import { render } from 'react-dom';
import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
let history = createBrowserHistory();

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
			<Router history={history}>
				<div>
					<div id="player"></div>
					<div className="container">
						<Header />
						<Switch>
							<Route exact path='/' render={() => (
								<Player MusicJson={this.state.MusicJson}></Player>
							)}></Route>
							<Route exact path='/list' render={() => (
								<MusicList  MusicGetList={this.state.MusicListItem} atOnce={this.state.MusicJson.id-1}></MusicList>
							)}></Route>
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default Root;