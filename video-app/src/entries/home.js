import React from 'react';
import {render} from 'react-dom';
//import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
import data from '../api.json'


const homeContainer = document.getElementById('home-container'); //Donde se va renderizar

//Donde se renderiza el html.
render(<Home data={data}/>,homeContainer);
