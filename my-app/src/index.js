import ReactDOM from 'react-dom/client';
import FirstIntro from './01_Intro.jsx';
import Practical from './Practical1.jsx';
import useState from './useState.jsx';
import Router from './Component/CommonComponent/Router.jsx';
import NavBar from './Component/CommonComponent/Navbar.jsx';
import './style.css'
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<><NavBar/></>);
// root.render(<><RouterProvider router={Router} /></>);
// root.render (<><Router/></>);
// root.render (<><useState/></>);

