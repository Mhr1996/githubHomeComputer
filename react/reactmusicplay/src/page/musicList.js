import React from 'react';
import Pubsub from 'pubsub-js';

class MustiList extends React.Component{
	constructor(props){
		super(props);

		this.state={
			musicList:this.props.MusicGetList
		}
	}
	playMeta(i){
		Pubsub.publish('PLAY_MUSIC',i);
	}
	deleteMusic(i,e){
		e.stopPropagation();
		Pubsub.publish('DEL_MUSIC',i);
	}
	render(){
		return(
			<div className="musicList">
				{this.state.musicList.map((value,index)=>{
					return (
						<li onClick={this.playMeta.bind(this,index)} className={`${this.props.atOnce==index?'active':''}`} key={index}>
							{value.title} - {value.artist} <span onClick={this.deleteMusic.bind(this,index)} style={{float:'right',marginRight:'30px'}}>delete</span>
						</li>
					)
				})}
			</div>
		)
	}
}

export default MustiList;