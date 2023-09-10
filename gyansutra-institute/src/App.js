import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Registration from './LoginPage/test';
import Home from './Home';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Define the onLogin function to handle user authentication
  const handleLogin = (user) => {
    // Your authentication logic here, e.g., setting the loggedInUser state
    setLoggedInUser(user);
    navigate('/'); // Redirect to the home page after successful login
  };

  // Define the onLogout function to handle user logout
  const handleLogout = () => {
    // Your logout logic here, e.g., clearing the loggedInUser state
    setLoggedInUser(null);
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div>
      {/* Header or navigation component */}
      <header>
        {/* Display user info and logout button when logged in */}
        {loggedInUser && (
          <div>
            <p>Welcome, {loggedInUser.formValue.fname}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>

      {/* Define routes for login and registration */}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/registration" element={<Registration />} />
        {/* Define other routes for your application */}
        {/* For example, a route for the home page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
