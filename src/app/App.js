import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import IconDemo from './page/IconDemo.js';
import Tabbar from './components/tabbar';

class About extends Component {
	render(){
		return(
			<div>
				About
			</div>
		);
	}
}

class Home extends Component{
	render(){
		return(
			<div>
				Home
			</div>
		);
	}
}

class Topics extends Component{
	render(){
		return(
			<div>
				Topics
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Tabbar></Tabbar>
			</div>
			// <BrowserRouter>
			// 	<div>
			// 		<ul>
			// 			<li><Link to="/">首页</Link></li>
			// 			<li><Link to="/about">关于</Link></li>
			// 			<li><Link to="/topics">主题列表</Link></li>
			// 		</ul>
	
			// 		<hr />
	
			// 		<Route exact path="/" component={Home} />
			// 		<Route path="/about" component={About} />
			// 		<Route path="/topics" component={Topics} />
			// 	</div>
			// </BrowserRouter>
		)
	}
	getData(){
		let baseUrl = 'http://api.wendy.com';
		axios.get(baseUrl+'/foods').then((res)=>{
			console.log(res.data);
		});
	}
	componentWillMount(){
		this.getData();
	}
}

// 请求数据
// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					{/* <img src={logo} className="App-logo" alt="logo" /> */}
// 					<h1 className="App-title">Welcome to _app</h1>
// 				</header>
// 				<p className="App-intro">
// 					{/* To get started, edit <code>src/components/App.js</code> and save to reload. */}
// 				</p>
// 			</div>
// 		);
// 	}
// 	getData(){
// 		let baseUrl = 'http://api.wendy.com';
// 		axios.get(baseUrl+'/foods').then((res)=>{
// 			console.log(res.data);
// 		});
// 	}
// 	componentWillMount(){
// 		this.getData();
// 	}
// }

export default App;
