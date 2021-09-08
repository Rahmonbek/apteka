import React from "react";
import Rasm from "./../../Component/img/Brand.png";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="dorilar_header">
      <Navbar className="dorilar-navbar">
        <Container>
          <Navbar.Brand>
            <Image src={Rasm} />
          </Navbar.Brand>
          <Nav className="dorilar-nav">
            <Nav.Link>
              <Link to="/">Bosh sahifa</Link>
            </Nav.Link>
            <Nav.Link href="#dorilar">
              <span>Dorilar</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="dorilar-main"></div>
    </div>
  );
}

export default Header;
