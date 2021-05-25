import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import * as ReactBootstrap from "react-bootstrap"


function Nav()  {
    return (
        <div>
        <ReactBootstrap.Navbar bg="primary" variant="dark">
          <ReactBootstrap.Navbar.Brand href="/">OBJECT DETECTION APP</ReactBootstrap.Navbar.Brand>

        </ReactBootstrap.Navbar>
        </div>
    )
}

export default Nav