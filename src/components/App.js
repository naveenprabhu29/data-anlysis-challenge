import React, { Component } from 'react';
import {Portfolio} from "./Portfolio/Portfolio";
import {about} from "./../constants/About";
import {projects} from "./../constants/Projects";
import {skills} from "./../constants/Skills";

import './App.css';

class App extends Component {
	constructor () {
		super();

		this.state = {
			selectedSec:"about",
			selectedHead:about.heading,
			selectedQuote:about.quote,
			about:about,
			skills:skills,
			projects:projects
		};
	}

	
	handleSection=(sectionName)=> {
		this.setState({
			selectedSec:sectionName,
			selectedHead:this.state[sectionName].heading,
			selectedQuote:this.state[sectionName].quote,

		})
		
		
	}
	render () {
		return (
			<div className="App">
				<Portfolio 
				selectedHead={this.state.selectedHead}
				selectedQuote={this.state.selectedQuote}
				selectedSec={this.state.selectedSec}
				handleSection={this.handleSection}
				about={this.state.about}
				skills={this.state.skills}
				projects={this.state. projects}
				/>
			</div>
		);
	}
}

export default App;
