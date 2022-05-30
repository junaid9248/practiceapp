// JSX, is a syntax extension to JavaScript. using it with React we can describe what the UI should look like.React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Links as NavLink} from 'react-router-dom';
import Sheets from './sheet1';
import Home from './homepage';
import Error_route from './error_route';
import List_input from './sheet2';
import List_display from './sheet3';
import Element from "./Element";
import { Sheet2provider } from './Context';

import './styling/App.css';


function App() {
  
  return (
    <Sheet2provider>
    <div>
     
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/file' element={<Element />}/>
          <Route path='/sheet'element={<Sheets />} />
          
          <Route path='/to-do-input' element={<List_input />}/>
          <Route path='/to-do-tasks' element={<List_display />} />
          
          

          <Route path='*' element={<Error_route />}/>
        
          

        </Routes>
      </Router>
      
</div>  
  </Sheet2provider> 
  );
}

export default App;