import React from 'react'
import { Link } from 'react-router-dom'

function navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
   {props.websiteName}
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/business">
          Business
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ideas">
          Ideas
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About us
        </Link>
      </li>
      </ul>
    
  </div>
</nav>

 </div>
  )
}

export default navbar
