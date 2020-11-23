//import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";

import {Navbar, Footer, ScrollTop} from "./pages";

import GlobalStyle from "./GlobalStyles";
import {BrowserRouter as HashRouter,Router, Route, Switch} from "react-router-dom";
import Carousels from './CarouselStyle';
import {ProjectOne } from "./pages/ProjectOne/projectOne";
import {About} from "./pages/about/About";
import {NoMatch} from './NoMatch';


function App() {
  
  
  return (
    <div>
      <HashRouter basename='/'>
      <GlobalStyle /> 
      <Navbar />
     
     

      <Switch>
        <Route path="/" exact component={Carousels} />
      <Route  path="/about" component={About} />
 <Route  path="/projectOne" component={ProjectOne} />

 <Route  component={NoMatch} />
      </Switch>
      <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
