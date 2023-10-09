import { useState } from 'react';
import './../LoginRegistration.css';
import { Link, useNavigate } from 'react-router-dom';
import CustomHook from './../hooks/customHook';
// import axios from 'axios';
import { useCookies } from 'react-cookie';
import { loginUsers } from './../actions/users';
import { useDispatch } from 'react-redux';
import { selectUser } from '../reducer/users';

const LoginCompoent = () => {
  const dispatch = useDispatch()
  const HooksData = CustomHook({}, { usernameError: "" });
  const navigate = useNavigate();
  const { handleChange, inp, errors } = CustomHook({ role: "2" }, { usernameError: "" });
  // console.log(handleChange);
  const [ActiveClass, setActiveClass] = useState(false);
  const [cookies, setCookie] = useCookies([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loginMsg, setLoginMsg] = useState("");


  const toggleForm = () => {
    setActiveClass(!ActiveClass);
  }
  const savedata = async (event) => {
    event.preventDefault();
    let abc = await dispatch(loginUsers(inp.username, inp.password))
    console.log(inp.username);
    console.log(abc);
    console.log(selectUser.state.user);
  }
  const registration = (event) => {
    event.preventDefault();
    console.log("save data", inp);
    // fetch("http://localhost/API/registration", {
    fetch("http://localhost:5000/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(inp)
    }).then((res) => res.json()).then((result) => {
      console.log(result);
      navigate("/login")
    })
    // fetch(`https://jayramin.000webhostapp.com/loginget?username=${inp.username}&password=${inp.password}`).then((res) => res.json()).then((result) => {
    //   console.log(result);
    // })
  }
  return (
    <>
      <section>
        {errorMsg ? <>Error while connecting please try after osme time</> : <> <div className={ActiveClass ? "container active" : "container"}>
          <Link className='position-absolute z-index-1 end-0 p-2' to="/"><i className='fa fa-home'></i></Link>
          <div className="user signinBx">
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
            <div className="formBx">
              <form method='post' onSubmit={savedata}>
                <h2>Sign In</h2>
                {/* {JSON.stringify(inp)}
                {JSON.stringify(errors)} */}
                <input type="text" className='required' onBlur={handleChange} name="username" placeholder="Username" />
                {errors.usernameError ? <span>This field is Required</span> : <></>}
                <input type="password" onBlur={handleChange} name="password" placeholder="Password" />
                {errors.passwordError ? <span>This field is Required</span> : <></>}
                <input type="submit" name="" value="Login" />
                <p className="signup">
                  Don't have an account ?
                  <a href="#" onClick={toggleForm}>Sign Up.</a>
                </p>
                {loginMsg ? <div className="position-fixed bottom-0 end-0 p-3 " style={{ zIndex: "11" }}>
                  <div id="liveToast" className="toast fade show border border-danger" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                      {/* <img src="..." className="rounded me-2" alt="..." /> */}
                      <strong className="me-auto">Login alert</strong>
                      <button type="button" className="btn-close" onClick={() => { setLoginMsg("") }} data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body text-danger">
                      Invalid User
                    </div>
                  </div>
                </div> : ""}

                {/* <p className='alert alert-danger'>{loginMsg}</p> */}
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form method='post' onSubmit={registration}>
                <h2>Create an account</h2>
                <input type="text" onBlur={handleChange} name="username" placeholder="Username" />
                <input type="email" name="email" onBlur={handleChange} placeholder="Email Address" />
                <input type="password" name="password" onBlur={handleChange} placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign Up" />
                <p className="signup">
                  Already have an account ?
                  <a href="#" onClick={toggleForm}>Sign in.</a>
                </p>
              </form>
            </div>
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
          </div>
        </div></>}

      </section>

      {/* <MDBContainer fluid className='mt-5'>
                <section>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6'>
                            <form>
                                <MDBInput className='mb-4' type='email' id='loginName' label='Email or username' />

                                <MDBInput className='mb-4' type='password' id='loginPassword' label='Password' />

                                <MDBRow className='mb-4'>
                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <MDBCheckbox className=' mb-3 mb-md-0' defaultChecked label=' Remember me' />
                                    </MDBCol>

                                    <MDBCol md='6' className='d-flex justify-content-center'>
                                        <a href='#!'>Forgot password?</a>
                                    </MDBCol>
                                </MDBRow>

                                <MDBBtn type='submit' block className='mb-4'>
                                    Sign in
                                </MDBBtn>

                                <div className='text-center'>
                                    <p>
                                        Not a member? <a href="#">Register</a>
                                    </p>
                                    <p>or sign up with:</p>
                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='facebook-f' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='google' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBBtn>

                                    <MDBBtn color='link' type='button' floating className='mx-1'>
                                        <MDBIcon fab icon='github' />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer> */}
    </>
  );
};

export default LoginCompoent;