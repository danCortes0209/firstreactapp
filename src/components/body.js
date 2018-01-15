import React from 'react';

export default class Body extends React.Component {
	render () {
		return [
			<section className="main" id="main">Hello</section>,
			<section className="about" id="about">About</section>,
			<section className="contact" id="contact">Contact</section>
		];	
	}
}

     