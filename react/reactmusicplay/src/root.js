import React from 'react';
import Header from './header';
import Player from './page/player';
import MusicList from './page/musicList';
import jPlayer  from 'jplayer';
import MusicJson from '../static/musicJsonList';

import { render } from 'react-dom';
import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Pubsub from 'pubsub-js';
let history = createBrowserHistory();

class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={
			MusicJson:MusicJson[0],
			MusicListItem:MusicJson
		}
	}
	Play(i){
		$("#player").jPlayer('setMedia',{
			mp3: MusicJson[i].file
		}).jPlayer('play');

		this.setState({
			MusicJson:MusicJson[i]
		})
	}
	playNext(a="next"){
		let index=this.getMusic(this.state.MusicJson);
		let newIndex=null;
		let mL=this.state.MusicListItem.length;
		console.log((index + 1) % mL);
		console.log(index);
		console.log(mL);
		if (a === "next") {
			newIndex=(index + 1) % mL;
		}else{
			newIndex=(index - 1 + mL) % mL;
		}	
		this.Play(newIndex);
	}
	getMusic(m){
		return this.state.MusicListItem.indexOf(m);
	}
	componentDidMount(){//在第一次渲染后调用，只在客户端。
		$("#player").jPlayer({
			supplied:'mp3',//定义提供给jPlayer的格式。顺序表示优先级
			wmode:'window'//允许设置Flash 的wmode。 有效的wmode值有: window, transparent, opaque, direct, gpu
		});
		this.Play(0);

		$("#player").bind($.jPlayer.event.ended, (e)=>{
			this.playNext();
		})

		Pubsub.subscribe('DEL_MUSIC',(msg , i)=>{
			this.setState({
				MusicListItem:MusicJson.splice(i, 1)
			})
		});
		Pubsub.subscribe('PLAY_MUSIC',(msg , i)=>{
			this.Play(i);
		});

		Pubsub.subscribe('PLAY_Prev',(msg)=>{
			this.playNext("prev");
		});
		Pubsub.subscribe('PLAY_Next',(msg)=>{
			this.playNext();
		});
	}
	componentWillUnMount(){//组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
		Pubsub.unsubscribe('DEL_MUSIC');
		Pubsub.unsubscribe('PLAY_MUSIC');
		Pubsub.unsubscribe('PLAY_Prev');
		Pubsub.unsubscribe('PLAY_Next');
		$("#player").unbind($.jPlayer.event.ended);
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