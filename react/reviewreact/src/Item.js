import React from 'react';

class Item extends React.Component{
	constructor(props){
		super(props);
	}
	delItem(i){
		this.props.delItem(this.props.index);
	}
	render(){
		return(
			<li onClick={this.delItem.bind(this)}>{this.props.itemValue}</li>
		)
	}
}

export default Item;