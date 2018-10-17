import React from 'react';
import Header from './header';
import Progress from './progress';
import  jPlayer  from 'jplayer';

let musicTime=null;
class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={
			progress:'-'
		}

		this.modifyProgress=this.modifyProgress.bind(this);
	}
	componentDidMount(){
		$("#player").jPlayer({
			ready:function(){
				$(this).jPlayer('setMedia',{
					mp3: 'https://m10.music.126.net/20181017205644/278ca56e4938bae44fca54390c801ffb/ymusic/5d63/5150/0851/5f226aac018cafc2cb248f7d28fbd5b4.mp3'
				}).jPlayer('play');
			},
			supplied:'mp3',
			wmode:'window'
		});

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
				<Header /><Progress progress={this.state.progress} childrenProgress={this.modifyProgress}/>
				<div id="player">33</div>
			</div>
		)
	}
}

export default Root;