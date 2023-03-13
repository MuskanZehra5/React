import React from 'react'

function Signup() {
  return (
    <div className='signupform'>
    <form>
    <h3>Register</h3>

    <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
    </div>

    <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
    </div>

    <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>
    <br></br>

    <button type="submit" className="regbtn btn btn-dark btn-lg btn-block">Register</button>
    <p className="forgot-password text-right"><br></br>
        Already registered <a href='/login'>log in?</a>
    </p>
</form>
</div>
  )
}

export default Signup