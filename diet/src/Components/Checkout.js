import React from 'react'

export default function Checkout() {
  return (
    <div class="checkoutmain">
        
        <div id="invoice-POS">
    
    
    
    <div id="bot">

					<div id="table">
						<table>
							<tr class="tabletitle">
								<td class="item"><h2>Item</h2></td>
								<td class="Hours"><h2>Qty</h2></td>
								<td class="Rate"><h2>Sub Total</h2></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Communication</p></td>
								<td class="tableitem"><p class="itemtext">5</p></td>
								<td class="tableitem"><p class="itemtext">$375.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
								<td class="tableitem"><p class="itemtext">3</p></td>
								<td class="tableitem"><p class="itemtext">$225.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Design Development</p></td>
								<td class="tableitem"><p class="itemtext">5</p></td>
								<td class="tableitem"><p class="itemtext">$375.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Animation</p></td>
								<td class="tableitem"><p class="itemtext">20</p></td>
								<td class="tableitem"><p class="itemtext">$1500.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
								<td class="tableitem"><p class="itemtext">10</p></td>
								<td class="tableitem"><p class="itemtext">$750.00</p></td>
							</tr>


							<tr class="tabletitle">
								<td></td>
								<td class="Rate"><h2>tax</h2></td>
								<td class="payment"><h2>$419.25</h2></td>
							</tr>

							<tr class="tabletitle">
								<td></td>
								<td class="Rate"><h2>Total</h2></td>
								<td class="payment"><h2>$3,644.25</h2></td>
							</tr>

						</table>
					</div>

					<div id="legalcopy">
						<p class="legal"><strong>Thank you for your purchase!</strong>  Delivery is expected within 7 days.
						</p>
					</div>

				</div>
  </div>






        <div id='form-wrapper'>
  <form>

    <div id='header' class='text-center mb-3'>
      <h1>Time To Square Up!</h1>
    </div>

    <div class='text-center'>
      <i class="fab fa-cc-visa fa-3x mr-3"></i>
      <i class="fab fa-cc-mastercard fa-3x mr-3"></i>
      <i class="fab fa-cc-amex fa-3x mr-3"></i>
      <i class="fab fa-cc-discover fa-3x mr-3"></i>
    </div>

    <h5>Billing Info</h5>

      <div class='form-group mb-1'>
        <label class='mb-1' for='firstName'>First Name</label>
        <input class='form-control mb-1' id='firstName' type='text' placeholder='Mariam'/>
      </div>

      <div class='form-group mb-1'>
        <label class='mb-1' for='lastName'>Last Name</label>
        <input id='lastName' type='text' class='form-control' placeholder='Salman'/>
      </div>

      <div class='form-group mb-1'>
        <label class='mb-1'>Street</label>
        <input class='form-control' type='text' id='street1' placeholder='DHA Phase 4 st6 324C'/>
      </div>

      <div class='form-group mb-1'>
        <label class='mb-1' for='city'>City</label>
        <input type='text' id='city' class='form-control' placeholder='Lahore'/>
      </div>

      <div class='form-row mb-2'>
        
        <div class='col-md-4'>

          <label class='mb-1' for='zip'>Zip</label>
          <input type='text' id='zip' class='form-control' placeholder='54002'/>
        </div>
      </div>

        <div class='btnconfirm form-row mb-1'>         
          <button class='btn btn-primary mt-4' type='submit'><i class="fas fa-lock mr-2"></i>Confirm Order</button>
        </div>
  </form>
</div>

    </div>
  )
}
