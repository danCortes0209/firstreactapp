import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/body.js';
 
document.addEventListener('DOMContentLoaded', function() {
  	ReactDOM.render(
   		<Body />,
    	document.getElementById('mount')
  	);
}); 