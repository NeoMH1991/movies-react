import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';

//replace class with className, href with to, 'a' with Navlink
const NavBar = () => {
  return (

    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/movies">Movies-Website</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
<ReactBootStrap.Nav className="mr-auto">
<ReactBootStrap.Nav.Link href="/movies">Movies</ReactBootStrap.Nav.Link>
<ReactBootStrap.Nav.Link href="/customers">Customers</ReactBootStrap.Nav.Link>
<ReactBootStrap.Nav.Link href="/rentals">Rentals</ReactBootStrap.Nav.Link>
<ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
<ReactBootStrap.Nav.Link href="/register">Register</ReactBootStrap.Nav.Link>

    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link className="navbar-brand" to="/"> NavBar </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //   </div>
    // </nav>
  );
};

export default NavBar;
