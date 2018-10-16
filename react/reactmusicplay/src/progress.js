import React from 'react';

class Progress extends React.Component{
	render(){
		return(
			<div>
				{this.props.progress}S
			</div>
		)
	}
}

export default Progress;