import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { loginUsers } from '../Redux/actions/users';
import CustomHook from './../hooks/customHook';



export default function Login() {
  const [loginData, setLoginData] = useState({
    uname: '',
    pw: ''
  });
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['user']);
  const dispatch = useDispatch()
  const { inp } = CustomHook({ role: "2" }, { usernameError: "" });


  useEffect(() => {
    document.body.style.backgroundColor = "rgb(180, 218, 233)"
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let abc = await dispatch(loginUsers(inp.username, inp.password))

    let apiData = abc.payload.data
    const user = apiData.find(
      (userData) =>
        (userData.uname === loginData.uname && userData.pw === loginData.pw) || // Check for direct user data
        (userData.formValue && userData.formValue.uname === loginData.uname && userData.formValue.pw === loginData.pw && userData.formValue.role_id === "2") // Check for nested user data
    );


    if (user) {
      // Check if user is defined and has fname
      console.log(user);
      const userFname = user.fname || 'Unknown';

      console.log(userFname);
      const uname = user.fname || 'Unknown';
      console.log("Role_id :- ", user.role_id);
      setCookie('Name', uname);
      setCookie('Role', user.role_id);

      // Redirect to the home page ("/") after a successful login as user or redirect to adminDash if login as admin
      (user.role_id === "1") ? navigate('/adminDash') : navigate('/');
      localStorage.setItem('hasDisplayedToast', 'false');

    } else {
      toast.error("The username or password is incorrect try again.");
    }
  }



  return (
    <div id='login' className="login container w-50" >
      <ToastContainer
        newestOnTop={false}
        rtl={false}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="dark"
        pauseOnFocusLoss={false}
      />
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
            <Link className='btn btn-dark' to='/signup'>Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
