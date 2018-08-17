import React from 'react';
import {render} from 'react-dom';
//import ReactDOM from 'react-dom';
import Categories from './src/categories/components/categories' 
import data from './src/api.json'


const app = document.getElementById('app'); //Donde se va renderizar

//Donde se renderiza el html.
render(<Categories data={data} />,app);
