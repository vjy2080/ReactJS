import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import{Routes,Route, BrowserRouter } from 'react-router-dom'
import NavBar from './Navbar';




const Router = () => {
  return (

    <BrowserRouter>
           <NavBar title='Component'/>
           {/* <NavBar title=3/> */}
           {/* <NavBar/> */}
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default Router;


// const router = createHashRouter([
//     {
//       path: "/",
//       element: <Home/> ,
//     },
//     {
//       path: "/About",
//       element: <About/> ,
//     },
//     {
//       path: "/Contact",
//       element: <Contact/> ,
//     },
//   ]);
  
// export default router;
        
        
        