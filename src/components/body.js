import React from 'react';

export default class Body extends React.Component {
	render () {
		return [
			React.createElement('section', {className: "main"}, 'Hello'),
			React.createElement('section', {className: "about"}, 'About'),
			React.createElement('section', {className: "contact"}, 'Contact')
		];	
	}
}

     