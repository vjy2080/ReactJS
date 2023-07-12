import ReactDOM from 'react-dom/client';
import FirstIntro from './01_Intro.jsx';
import Practical from './Practical1.jsx';
import router from './Component/CommonComponent/Router.jsx';
import './style.css'
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<> <RouterProvider router={router} /></>);