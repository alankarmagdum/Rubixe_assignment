import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Service from "./components/Service";
import Products from "./components/Products";
import AI_Internship from "./components/Ai_internship";
import Career from "./components/Career";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";

ReactDOM.render(

    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/AI_Internship' element={<AI_Internship/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>,

  document.getElementById('root')
);
