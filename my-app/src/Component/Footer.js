import React from 'react'

export default function Footer() {
    return (
    
      <footer className="footer">
      <div className="container">
        
        <div className="col-md-3 w3_footer_grid">
          <h3>policy info</h3>
          <ul className="w3_footer_grid_list">
            <li><a href="faqs.html">FAQ</a></li>
            <li><a href="privacy.html">privacy policy</a></li>
            <li><a href="privacy.html">terms of use</a></li>
          </ul>
        </div>
        <div className="col-md-3 w3_footer_grid">
          <h3>what in stores</h3>
          <ul className="w3_footer_grid_list">
            <li><a href="frozen.html">Meat</a></li>
            <li><a href="beverage.html">Beverages</a></li>
            <li><a href="fruits.html">Fruits</a></li>
            <li><a href="veggies.html">Veggies</a></li>
            <li><a href="bread.html">Breads and Bakery</a></li>
            <li><a href="cereals.html">Cereals</a></li>
          </ul>
        </div>
        <div className="col-md-3 w3_footer_grid">
          <h3>Location</h3>
          <ul className="w3_footer_grid_list1" >
            <li><i> FAST NUCES</i><span></span></li>
            <li><i> 852-B Milaad St, Block B Faisal Town, Lahore, Punjab 54770, Pakistan</i><span></span>

            </li>
             
          </ul>
        </div>
        <div className="clearfix"> </div>
        <div className="agile_footer_grids">
          <div className="col-md-0 w3_footer_grid ">
      
          </div>
          <div className="col-md-0 w3_footer_grid agile_footer_grids_w3_footer">
            <div className="w3_footer_grid_bottom">
              <h5>connect with us</h5>
              <ul className="agileits_social_icons">
                <li><a href="a.html" className="facebook"><i className="fa fa-facebook" ></i></a></li>
                <li><a href="a.html" className="twitter"><i className="fa fa-twitter" ></i></a></li>
                <li><a href="a.html" className="instagram"><i className="fa fa-instagram" ></i></a></li>
              </ul>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="wthree_footer_copy">
          <p>Copyright © Diet Society 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
  

}
