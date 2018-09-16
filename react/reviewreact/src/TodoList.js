import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state={
			list:[
				"a List",
				"b LIst"
			],
			value:""
		}
	}
	btnClick(){
		this.setState({
			list:[...this.state.list,this.state.value],
			value:""
		})
	}
	valueModify(e){
		this.setState({
			value:e.target.value
		})
	}
	delLi(i){
		let L=this.state.list;
		L.splice(i,1);
		this.setState({
			list:L
		})
	}
  	render() {
	    return (
	      <div>
	        <input type="text" onChange={this.valueModify.bind(this)} value={this.state.value}/>
	        <button onClick={this.btnClick.bind(this)}>点击</button>
	        <ul>
	        	{this.state.list.map((index,i)=>{
	        		return <li key={i} onClick={this.delLi.bind(this,i)}>{index}</li>
	        	})}
	        </ul>
	      </div>
	    );
  	}
}

export default TodoList;
