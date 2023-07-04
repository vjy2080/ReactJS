import ReactDOM from 'react-dom/client';
import FirstIntro from './FirstIntro.jsx'


const Something = () => {
    return "Called" 
};

export default Something;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Something/>);