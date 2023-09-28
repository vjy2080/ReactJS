import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Loader from '../CommonCompo/Loader';

export default function Login() {
  const [loginData, setLoginData] = useState({
    uname: 'vjy2080@gmail.com',
    pw: 'vjy'
  });
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['user']);

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(180, 218, 233)"
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the API data
      const response = await fetch('http://localhost:3004/user');
      <Loader />
      if (!response.ok) {
        console.error('Failed to fetch data from the API.');
        return;
      }

      // Parse the API response into JSON
      const apiData = await response.json();
      // console.log('API Data:', apiData);

      // Find a user in the API data whose username and password match the entered values
      const user = apiData.find(
        (userData) =>
          (userData.uname === loginData.uname && userData.pw === loginData.pw) || // Check for direct user data
          (userData.formValue && userData.formValue.uname === loginData.uname && userData.formValue.pw === loginData.pw && userData.formValue.role_id === "2") // Check for nested user data
      );

      // console.log('Found User:', user);

      if (user) {
        // Check if user is defined and has fname
        // const userFname = user.fname || 'Unknown';

        // console.log(userFname);
        const uname = user.fname || 'Unknown';
        // console.log("Role_id :- ", user.role_id);
        setCookie('Name', uname);
        setCookie('Role', user.role_id);

        // Redirect to the home page ("/") after a successful login
        navigate('/');
      } else {
        console.error('User not found or missing data.');
        alert("User not found or missing data.");
      }
    }
    catch (error) {
      console.error('An error occurred:', error);
      alert(`An error occurred: ${error.message}`);
    }

  }



  return (
    <div id='login' className="login container w-50" >
      <div className="row d-flex justify-content-center pb-5 mt-3 rounded-5">
        <h3 className="text-center text-dark my-3">Please Login To Continue...</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="uname" className="text-dark text-center w-100 fw-bold form-label">
              Username (Email)
            </label>
            <input
              type="email"
              className="form-control w-50 text-center mx-auto"
              id="uname"
              name="uname"
              value={loginData.uname}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pw" className="text-dark text-center w-100 fw-bold form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control  w-50 text-center mx-auto"
              id="pw"
              name="pw"
              value={loginData.pw}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className=" btn btn-primary">
              Login
            </button>
          </div>
          <div className='my-2 text-center'>
            <p className='text-danger'>Don't have an account yet ?</p>
            <Link className='btn btn-dark' to='/signup'>Sign-Up Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
