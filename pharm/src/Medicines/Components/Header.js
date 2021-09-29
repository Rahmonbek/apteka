import React, { useState } from "react";
import Rasm from "./../../Component/img/Brand.png";
import { Navbar, Container, Nav, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import styles from "../../Component/Css/LandingPage.module.css";
import NavbarMenuChat from "../../Component/NavbarMenu";

function Header(props) {
  const [res, setRes] = useState(true);
  return (
    <div className="fixed-top">
      {!res ? (
        <div className={` ${!res ? "dorilar-res-menu" : ""}`}>
          <div className="menu-dorilar">
            <Button onClick={() => setRes(!res)}>
              <AiOutlineClose />
            </Button>
          </div>
          <div className="dorilar-navbar">
            <Nav.Link>
              <Link to="/">Bosh sahifa</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">Dorilar</Link>
            </Nav.Link>
            <Nav.Link>
              <span onClick={() => setRes(!res)}>Dorixonalar</span>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contact">Kontakt</Link>
            </Nav.Link>
          </div>
        </div>
      ) : (
        ""
      )}
      <div id={styles.NavbarMe}>
        <NavbarMenuChat />
      </div>
      {/* <div className="dorilar_header">
        <Navbar className="dorilar-navbar">
          <Container>
            <Navbar.Brand className="mx-4">
              <Image src={Rasm} />
            </Navbar.Brand>
            <div className="menu-dorilar">
              <Button onClick={() => setRes(!res)}>
                <AiOutlineMenu />
              </Button>
            </div>
            <div>
              <span className="actives">
                <div className={`${styles.ScheduleName} actives`}>
                  <div className={styles.ScheduleNameIcon}>
                    <p>
                      <MdTimer />
                    </p>
                    <p style={{ letterSpacing: "0.5px" }}>
                      Dush-Jum (9:00-17:00)
                    </p>
                  </div>
                  <div className={styles.ScheduleNameIcon}>
                    <p>
                      <IoIosCall />
                    </p>
                    <p style={{ letterSpacing: "0.5px" }}>+998(71)799-88-00</p>
                  </div>
                  <div className={styles.ScheduleNameIcon}>
                    <p>
                      <HiOutlineMail />
                    </p>
                    <p style={{ letterSpacing: "0.5px" }}>
                      pharmacyuzb@gmail.com
                    </p>
                  </div>
                </div>
              </span>
              <Nav className={`dorilar-nav actives`}>
                <Nav.Link>
                  <Link to="/">Bosh sahifa</Link>
                </Nav.Link>
                <Nav.Link>
                  <span>Dorilar</span>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="/apteka">Dorixonalar</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/Contact">Kontakt</Link>
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
        <div className="dorilar-main"></div>
      </div> */}
    </div>
  );
}

export default Header;
