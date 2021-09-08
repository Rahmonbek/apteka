import React, { useState } from "react";
import Rasm from "./../../Component/img/Brand.png";
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [res, setRes] = useState(true);

  return (
    <>
      {res ? (
        <div className="dorilar-res-menu">
          <div className="menu-dorilar">
            <Button onClick={() => setRes(!res)}>
              <AiOutlineClose />
            </Button>
          </div>
          <div className="dorilar-navbar">
            <Nav.Link>
              <Link to="/">Bosh sahifa</Link>
            </Nav.Link>
            <Nav.Link href="#dorilar">
              <span>Dorilar</span>
            </Nav.Link>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="dorilar_header">
        <Navbar className="dorilar-navbar">
          <Container>
            <Navbar.Brand>
              <Image src={Rasm} />
            </Navbar.Brand>
            <div className="menu-dorilar">
              <Button onClick={() => setRes(!res)}>
                <AiOutlineMenu />
              </Button>
            </div>
            <Nav className={`dorilar-nav active`}>
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
    </>
  );
}

export default Header;
