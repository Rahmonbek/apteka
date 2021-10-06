import React, { useState } from "react";
import styles from "./Css/LandingPage.module.css";
import Rasm from "./img/Brand.png";
import { Navbar, Container, Nav, Image, Modal } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import NavbarMenuChat from "./NavbarMenu";

// import { Modal, Button, Space } from "antd";
function Menu() {
  const [smShow, setSmShow] = useState(false);
  const showModalBot = () => {
    setSmShow(false);
  };
  AOS.init({
    duration: 1000,
  });
  return (
    <>
      <div className={styles.HeaderMenu}>
        <div>
          <NavbarMenuChat />
        </div>
        {/* <div className="fixed-top" id={styles.NavbarMe}>
          <Container>
            <div className={styles.NavbarMenu}>
              <div className={styles.ScheduleName}>
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
              <Navbar
                className={styles.NavbarGroup}
                collapseOnSelect
                expand="lg"
              >
                <Container>
                  <Navbar.Brand href="#home">
                    <Image className={styles.ImgBrand} src={Rasm} />
                  </Navbar.Brand>
                  <Navbar.Toggle
                    className={styles.NavbarMenuMedia}
                    aria-controls="responsive-navbar-nav"
                    style={{ color: "#98349400", border: "none" }}
                  >
                    <i
                      class="fas fa-bars"
                      style={{ color: "white", fontSize: "26px" }}
                    ></i>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.NavMe}>
                      <Nav.Link to="/">
                        <p>Bosh sahifa</p>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/dorilar">
                          {" "}
                          <p>Dorilar</p>
                        </Link>
                      </Nav.Link>
                      <Nav.Link href="/apteka">
                        <p>Dorixonalar</p>
                      </Nav.Link>
                      <Nav.Link href="/Contact">
                        <p>Kantakt</p>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Container>
        </div> */}

        <div className={styles.Menu}>
          <Container className={styles.MenuGroup}>
            <div className={styles.MenuText}>
              <h4 style={{ color: "white" }}>
                {" "}
                O'zingiz haqingizda qayg'uring
              </h4>
              <h1
                style={{
                  color: "white",
                }}
              >
                Biz har bir mijoz <br />
                <b>
                  {" "}
                  Istagi va Xohishini amalga{" "}
                  <a href="#kun" style={{ color: "white" }}>
                    Oshiramiz
                  </a>
                  .
                </b>
              </h1>
              <div className={styles.MenuTextNextIcons}>
                <p>
                  <BsArrowRight />
                </p>
                <p style={{ marginLeft: "10px" }}>
                  {" "}
                  Umidingizni so'ndirmang HEALTH With You
                </p>
              </div>
              <p className={styles.TextOnlineBuy}>
                HEALTH Sizga dorixonaga borishning yangi usulini taklif
                etadi.Endi dorixona oynasida navbat kutishning hojati yo'q,
                chunki endi siz uydan chiqmasdan yoki ish joyingizdan chiqmasdan
                dori tanlashingiz mumkin.
              </p>
              <div className={styles.MenuTextButtons}>
                <a className={styles.WhatchWriter}>
                  <a
                    className={styles.CardModalItemMe}
                    onClick={() => setSmShow(true)}
                  >
                    Ma'lumot uchun
                  </a>

                  <Modal
                    className={styles.CardModalItem}
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header>
                      <Modal.Title id="example-modal-sizes-title-sm">
                        Ma'lumot uchun!
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p className={styles.CardBodyCallIcon}>
                        {" "}
                        <i class="fas fa-phone-alt"></i>
                        <i>+998(78)-645-23-12</i>
                      </p>
                      <p className={styles.CardBodyCallIcon}>
                        {" "}
                        <i class="fas fa-phone-alt"></i>
                        <i>+998(78)-645-23-12</i>
                      </p>
                      <p className={styles.CardBodyCallIcon}>
                        {" "}
                        <i class="fas fa-phone-alt"></i>
                        <i>+998(78)-645-23-12</i>
                      </p>
                    </Modal.Body>
                    <Modal.Footer
                      className={styles.CardFooterExitIcon}
                      onClick={() => showModalBot()}
                    >
                      <i class="fas fa-times"></i>
                    </Modal.Footer>
                  </Modal>
                </a>

                <a
                  className={styles.WhatchVideo}
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    style={{
                      color: "white",
                      marginLeft: "10%",
                    }}
                  >
                    <MdSlowMotionVideo />
                  </p>
                  <p
                    style={{
                      marginLeft: "10px",
                      color: "white",
                    }}
                  >
                    Videoni Ko'rish
                  </p>
                </a>
              </div>
            </div>
            <div className={styles.MenuImg}>
              <div className={styles.MenuText1}>
                <h4 className={styles.MenuTextH4} style={{ color: "white" }}>
                  {" "}
                  O'zingiz haqingizda qayg'uring
                </h4>
                <h1
                  style={{
                    color: "white",
                  }}
                >
                  Biz har bir mijoz
                  <b>
                    <br /> Istagi va Hohishini amalga{" "}
                    <a href="#kun" style={{ color: "white" }}>
                      Oshiramiz
                    </a>
                    .
                  </b>
                </h1>
                <div className={styles.MenuTextNextIcons}>
                  <p>
                    <BsArrowRight />
                  </p>
                  <p style={{ marginLeft: "10px" }}>
                    {" "}
                    Umidingizni so'ndirmang HEALTH With You
                  </p>
                </div>
                <p className={styles.TextOnlineBuy}>
                  HEALTH Sizga dorixonaga borishning yangi usulini taklif
                  etadi.Endi dorixona oynasida navbat kutishning hojati yo'q,
                  chunki endi siz uydan chiqmasdan yoki ish joyingizdan
                  chiqmasdan dori tanlashingiz mumkin.
                </p>
                <div className={styles.MenuTextButtons}>
                  <a className={styles.WhatchWriter}>
                    <a
                      className={styles.CardModalItemMe}
                      onClick={() => setSmShow(true)}
                    >
                      Ma'lumot uchun
                    </a>

                    <Modal
                      className={styles.CardModalItem}
                      size="sm"
                      show={smShow}
                      onHide={() => setSmShow(false)}
                      aria-labelledby="example-modal-sizes-title-sm"
                    >
                      <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-sm">
                          Ma'lumot uchun!
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p className={styles.CardBodyCallIcon}>
                          {" "}
                          <i class="fas fa-phone-alt"></i>
                          <i>+998(78)-645-23-12</i>
                        </p>
                        <p className={styles.CardBodyCallIcon}>
                          {" "}
                          <i class="fas fa-phone-alt"></i>
                          <i>+998(78)-645-23-12</i>
                        </p>
                        <p className={styles.CardBodyCallIcon}>
                          {" "}
                          <i class="fas fa-phone-alt"></i>
                          <i>+998(78)-645-23-12</i>
                        </p>
                      </Modal.Body>
                      <Modal.Footer
                        className={styles.CardFooterExitIcon}
                        onClick={() => showModalBot()}
                      >
                        <i class="fas fa-times"></i>
                      </Modal.Footer>
                    </Modal>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com"
                    className={styles.WhatchVideo}
                  >
                    <p>
                      <MdSlowMotionVideo />
                    </p>
                    <p className={styles.WhatchVideoP2}>Videoni Ko'rish</p>
                  </a>
                </div>
              </div>
              {/* <Image classname={styles.MenuImgRasm} src={person} /> */}
            </div>
          </Container>{" "}
          <svg
            className={styles.Curved}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,208C840,192,960,96,1080,80C1200,64,1320,128,1380,160L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Menu;
