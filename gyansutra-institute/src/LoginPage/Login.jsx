import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AlertBox from './AlertBox';
import { useCookies } from 'react-cookie';

export default function Login() {
  const [loginData, setLoginData] = useState({ uname: '', pw: '' });
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the API data
      const response = await fetch('http://localhost:3004/posts');
      if (!response.ok) {
        console.error('Failed to fetch data from the API.');
        return;
      }

      // Parse the API response into JSON
      const apiData = await response.json();
      console.log('API Data:', apiData);

      // Find a admin in the API data whose name and password match the entered values
      const admin = apiData.find(
        (adminData) =>
          (adminData.uname === loginData.uname && adminData.pw === loginData.pw) || // Check for direct admin data
          (adminData.formValue && adminData.formValue.uname === loginData.uname && adminData.formValue.pw === loginData.pw && adminData.formValue.role_id === "1") // Check for nested admin data
      );

      console.log('Found admin:', admin);

      if (admin) {
        // Call the onLogin function from the parent component
        console.log(admin.formValue.fname);
        console.log("Role_id :- ", admin.formValue.role_id);
        console.log('Login successful As Admin');
        // setCookie('Name', admin.formValue.fname, { path: '/' });
        setCookie('Name', admin.formValue.fname);

        // Redirect to the home page ("/") after a successful login
        navigate('/adminDash');
        return;
      }



      // Find a user in the API data whose username and password match the entered values
      const user = apiData.find(
        (userData) =>
          (userData.uname === loginData.uname && userData.pw === loginData.pw) || // Check for direct user data
          (userData.formValue && userData.formValue.uname === loginData.uname && userData.formValue.pw === loginData.pw && userData.formValue.role_id === "2") // Check for nested user data
      );

      console.log('Found User:', user);

      if (user) {
        // Call the onLogin function from the parent component
        console.log(user.formValue.fname);
        console.log("Role_id :- ", user.formValue.role_id);
        console.log('Login successful as user');
        setCookie('Name', user.formValue.fname);


        // Redirect to the home page ("/") after a successful login
        navigate('/');
      } else {
        console.error('Check Username and password are correct.');
      }

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container w-50">
      <div className="row d-flex justify-content-center border border-danger pb-5 mt-3 rounded-5">
        <h1 className="text-center my-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="uname" className="form-label">
              Username (Email)
            </label>
            <input
              type="email"
              className="form-control"
              id="uname"
              name="uname"
              value={loginData.uname}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pw" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pw"
              name="pw"
              value={loginData.pw}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
