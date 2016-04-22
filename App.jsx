import React, {Component} from 'react'

import {
	Router,
	Route,
	hashHistory
} from 'react-router'

import SliderCop from './components/slider/sliderCop.jsx'
export default class App extends Component{
	render(){
		return (
			<div>
				Hello World!!!<br/>
				<SliderCop></SliderCop>
				<Router history={hashHistory}>
					<Route path="/"></Route>
					<Route path="/"></Route>
					<Route path="/"></Route>
					<Route path="/"></Route>
				</Router>
			</div>
		);
	}
}