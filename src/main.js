import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/body.js';
 
document.addEventListener('DOMContentLoaded', function() {
  	ReactDOM.render(
   		React.createElement(Body, null, null),
    	document.getElementById('mount')
  	);
}); 