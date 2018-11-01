import React from 'react';

class MustiList extends React.Component{
	constructor(props){
		super(props);

		this.state={
			musicList:this.props.MusicGetList
		}
		console.log(this.props.atOnce)
	}
	render(){
		return(
			<div className="musicList">
				{this.state.musicList.map((value,index)=>{
					return <li className={`${this.props.atOnce==index?'active':''}`} key={index}>{value.title} - {value.artist} <span style={{float:'right',marginRight:'30px'}}>delete</span></li>
				})}
			</div>
		)
	}
}

export default MustiList;