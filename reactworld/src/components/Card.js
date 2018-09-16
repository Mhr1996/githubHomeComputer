import React from 'react';

class CardTest extends React.Component{
	render(){
		const {name,tel,person,item} =this.props;
		return (
			<div>
				<p>{name}</p>
				{item.map((value,index)=>
					<span key={index}>{value},</span>
				)}
			</div>
		)
	}
}

export default CardTest