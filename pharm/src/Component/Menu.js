import React from "react";
import styles from "./Css/LandingPage.module.css";
import Rasm from "./img/Brand.png";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <div className={styles.HeaderMenu}>
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
                    <Nav.Link href="#deets">
                      <p>Menu</p>
                    </Nav.Link>
                    <Nav.Link href="#service">
                      <p>Xizmatlar</p>
                    </Nav.Link>
                    <Nav.Link href="#List">
                      <p>Doctors</p>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/dorilar">
                        {" "}
                        <p>Dorilar</p>
                      </Link>
                    </Nav.Link>

                    <Nav.Link href="#Testimonials">
                      <p>Testimonials</p>
                    </Nav.Link>
                    <Nav.Link href="#blog">
                      <p>Blog</p>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className={styles.Menu}>
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
                  Istagi va Hohishini amalga{" "}
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
                HEALTH Sizga dorixonaga borishing yangi usulini taklif
                etadi.Endi dorixona oynasida navbat kutishning hojati yo'q,
                chunki endi siz uydan chiqmasdan yoki ish joyingizdan chiqmasdan
                dori tanlashingiz mumkin.
              </p>
              <div className={styles.MenuTextButtons}>
                <div className={styles.WhatchWriter}>
                  <p>Maslahat Olish</p>
                </div>
                <div className={styles.WhatchVideo}>
                  <p
                    style={{
                      fontSize: "27px",
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
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  >
                    Videoni Ko'rish
                  </p>
                </div>
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
                  Biz har bir mijoz <br />
                  <b>
                    {" "}
                    Istagi va Hohishini amalga{" "}
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
                  HEALTH Sizga dorixonaga borishing yangi usulini taklif
                  etadi.Endi dorixona oynasida navbat kutishning hojati yo'q,
                  chunki endi siz uydan chiqmasdan yoki ish joyingizdan
                  chiqmasdan dori tanlashingiz mumkin.
                </p>
                <div className={styles.MenuTextButtons}>
                  <div className={styles.WhatchWriter}>
                    <p>Maslahat Olish</p>
                  </div>
                  <div className={styles.WhatchVideo}>
                    <p>
                      <MdSlowMotionVideo />
                    </p>
                    <p className={styles.WhatchVideoP2}>Videoni Ko'rish</p>
                  </div>
                </div>
              </div>
              {/* <Image classname={styles.MenuImgRasm} src={person} /> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Menu;
