import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import{createHashRouter} from 'react-router-dom'



const router = createHashRouter([
    {
      path: "/",
      element: <Home/> ,
    },
    {
      path: "/About",
      element: <About/> ,
    },
    {
      path: "/Contact",
      element: <Contact/> ,
    },
  ]);

        
export default router;
        
        
        