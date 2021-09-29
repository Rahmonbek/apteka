import React from "react";
import styles from "./Css/LandingPage.module.css";
import { Navbar, Container, Nav, Image, Modal } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import Rasm from "./img/Brand.png";
import { Link } from "react-router-dom";

export default function NavbarMenuChat() {
  return (
    <div>
      <div className="fixed-top" id={styles.NavbarMe}>
        <Container>
          <div className={styles.NavbarMenu}>
            <div className={styles.ScheduleName}>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <MdTimer />
                </p>
                <p style={{ letterSpacing: "0.5px" }}>Dush-Jum (9:00-17:00)</p>
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
                <p style={{ letterSpacing: "0.5px" }}>pharmacyuzb@gmail.com</p>
              </div>
            </div>
            <Navbar className={styles.NavbarGroup} collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand>
                  <Image className={styles.ImgBrand} src={Rasm} />
                </Navbar.Brand>
                <Navbar.Toggle
                  className={styles.NavbarMenuMedia}
                  aria-controls="responsive-navbar-nav"
                  style={{ border: "none" }}
                >
                  <i
                    class="fas fa-bars"
                    style={{ color: "white", fontSize: "26px" }}
                  ></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className={styles.NavMe}>
                    <Nav.Link className={styles.NavButton}>
                      <Link exact={true} to="/">
                        {" "}
                        <p>Bosh sahifa</p>{" "}
                      </Link>
                    </Nav.Link>
                    <Nav.Link className={styles.NavButton}>
                      <Link to="/dorilar">
                        {" "}
                        <p>Dorilar</p>
                      </Link>
                    </Nav.Link>
                    <Nav.Link className={styles.NavButton}>
                      <Link activeclassName="active" to="/apteka">
                        {" "}
                        <p>Dorixonalar</p>
                      </Link>
                    </Nav.Link>
                    <Nav.Link className={styles.NavButton}>
                      <Link to="/Contact">
                        {" "}
                        <p>Bog'lanish</p>
                      </Link>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Container>
      </div>
    </div>
  );
}
