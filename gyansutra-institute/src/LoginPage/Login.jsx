import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import AlertBox from './AlertBox';
import { useCookies } from 'react-cookie';
import Loader from '../CommonCompo/Loader';

export default function Login() {
  const [loginData, setLoginData] = useState({ uname: '', pw: '' });
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(180, 218, 233)"
  });
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
        setCookie('Role', admin.formValue.role_id);

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
        const uname = user.formValue.fname
        console.log("Role_id :- ", user.formValue.role_id);
        setCookie('Name', user.formValue.fname);
        setCookie('Role', user.formValue.role_id);



        // Redirect to the home page ("/") after a successful login
        navigate('/');
      } else {
        // console.error('Check Username and password are correct.');
        alert("Check Username and password are correct.")
      }

    } catch (error) {
      alert("Can't resolve server...", error);
    }
  };



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
