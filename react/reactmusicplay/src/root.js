import React from 'react';
import Header from './header';
import Player from './page/player';
import  jPlayer  from 'jplayer';

class Root extends React.Component{
	constructor(props){
		super(props);

		this.state={}

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
	}
	componentWillUnMount(){
	}
	render(){
		return(
			<div>
				<Header />
				<div  className="container">
					<Player />
					<div id="player"></div>
				</div>
			</div>
		)
	}
}

export default Root;