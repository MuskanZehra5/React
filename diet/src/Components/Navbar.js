import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
 
    <nav class="navbar">
        <div class="navbar-container container">
            
            <ul class="menu-items">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Meal Plans</a></li>
                <li><a href="/">Meal Items</a></li>
                <li><a href="/">Login in</a></li>
                <li><a href="/">Sign Up</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <h1 class="logo">{props.title}</h1>
        </div>
    </nav>
  )
}
Navbar.propTypes = {title:propTypes.string.isRequired}
Navbar.defaultProps = {title :"set title here"}