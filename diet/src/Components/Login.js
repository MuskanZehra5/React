import React from 'react'
import Signup from './Signup'


export default function Login() {
  
  return (

    <div className='loginform'>
      <form>
                <h3 >Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br></br>

                <button type="submit" onClick={Signup} className="btnhover btn btn-dark btn-lg btn-block">
                  Sign in
                </button>
                <br></br>

                <p className="forgot-password text-right"><br></br>
                  Not registered? <a href='/Signup'>Sign Up</a>
</p>
            </form>
            </div>
  )
}