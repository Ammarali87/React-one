import { useState } from 'react';
import Home from "./Home.jsx"
import Nav from "./Nav.jsx"
import About from "./About.jsx"
import './App.css';

import Footer from './footer.jsx';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './Contact.jsx';
import Layout from './Layout.jsx';

 const router = createBrowserRouter([
   { path : "" , element : <Layout/>, children:[ 
    { index : true , element : <Home/>},
    { path : "about" , element : <About/>},
    { path : "contact" , element : <Contact/>},
  ]}
 ])
function App() { 
  return (
      <RouterProvider router={router}>
   <div clasBrowserRoutersName="App"> 
       <Nav/>
       <Home/>
       <Footer/>
      </div>
    </RouterProvider> 
         
       
      
  );
}

export default App;
