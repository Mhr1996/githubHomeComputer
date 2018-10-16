import React from 'react';
import Header from './header';
import Progress from './progress';
import  jPlayer  from 'jplayer';

class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={
			progress:'-'
		}
	}
	componentDidMount(){
		$("#player").jPlayer({
			ready:function(){
				$(this).jPlayer('setMedia',{
					mp3: 'https://m10.music.126.net/20181016213546/b6227f5a30c08879c30f4ee81d2d288e/ymusic/f7d9/3a9e/92a2/0515ecaeb8adcecb2e98634c7e543cf2.mp3'
				}).jPlayer('play');
			},
			supplied:'mp3',
			wmode:'window'
		});

		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			this.setState({
				progress:Math.round(e.jPlayer.status.currentTime)
			});
		})
	}
	render(){
		return(
			<div>
				<Header /><Progress progress={this.state.progress}/>
				<div id="player">33</div>
			</div>
		)
	}
}

export default Root;