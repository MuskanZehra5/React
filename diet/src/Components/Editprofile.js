import React from 'react'

export default function Personalizeacc() {
  return (
    <div class="card-body">
              <form className='editcard'>
                <h1 class="head1 ">User information</h1>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Username</label>
                        <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value=""/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Email address</label>
                        <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="muskan@example.com"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-full-name">Full name</label>
                        <input type="text" id="input-full-name" class="form-control form-control-alternative" placeholder="Full name" value=""/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-password-name">Password</label>
                        <input type="password" id="input-password-name" class="form-control form-control-alternative" placeholder="Password" value=""/>
                      </div>
                    </div>
                  </div>
                </div><br></br>
                <h4 class="head2 ">Contact information</h4>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-address">Address</label>
                        <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" value="" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-city">City</label>
                        <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value=""/>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-country">Country</label>
                        <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value=""/>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="editbuttons">
                  <button type='submit'>Save</button>
                  <button type='submit'>Delete Account</button>



                </div>
               </form>

              <div className="profilepic">

              </div>

            </div>
  )
}
