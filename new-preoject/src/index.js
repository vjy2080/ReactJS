import ReactDOM from 'react-dom/client';
import Router from './Component/CommonComponent/Router.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style.css'
import { RouterProvider } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Router} />);

