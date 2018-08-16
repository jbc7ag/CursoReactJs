import React from 'react';
import {render} from 'react-dom';
//import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media' 

//console.log('Hola Mundo');

const app = document.getElementById('app'); //Donde se va renderizar
const holaMundo = <h1>Hola Estudiantes!</h1>; // Qué se va renderizar.



//Donde se renderiza el html.
render(<Media type="video" author="Jessica Barrientos" imagen="./images/covers/bitcoin.jpg" title="¿Que es responsive design?"/>,app);
