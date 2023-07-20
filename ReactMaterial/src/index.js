import ReactDOM from 'react-dom/client';
import './style.css'
import mainRouter from './router.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <mainRouter />
</>);