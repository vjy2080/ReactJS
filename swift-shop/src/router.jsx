import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Component/Header.jsx';
import Home from './home';
import About from './about';
import Contact from './contact';


function App() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  