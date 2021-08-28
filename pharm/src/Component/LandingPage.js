import React from "react";
import styles from "./Css/LandingPage.module.css";
import CardGroup from "./CardGroup";
import Rasm from "./img/Brand.png";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import Doctor1 from "./img/Rectangle 10.png";
import Doctor2 from "./img/Rectangle 11.png";
import Doctor3 from "./img/Rectangle 8.png";
import Doctor4 from "./img/Rectangle 9.png";
import person from "./img/Person.png";
import ImageSlider from "../Component/Carousel/Carousel";
import AOS from "aos";

import {
  EditOutlined,
  EllipsisOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import { Card } from "antd";
import SliderGroup from "./SliderGroup";
const { Meta } = Card;

export default function LandingPage() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className={styles.BodyHeader}>
      <div className={styles.HeaderMenu}>
        <Container>
          <div className={styles.NavbarMenu}>
            <div className={styles.ScheduleName}>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <MdTimer />
                </p>
                <p style={{ marginLeft: "10px" }}>Dush-Jum (9:00-17:00)</p>
              </div>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <IoIosCall />
                </p>
                <p style={{ marginLeft: "10px" }}>+998(71)777-77-77</p>
              </div>
              <div className={styles.ScheduleNameIcon}>
                <p>
                  <HiOutlineMail />
                </p>
                <p style={{ marginLeft: "10px" }}>pharmacyuzb@gmail.com</p>
              </div>
            </div>
            <Navbar className={styles.NavbarGroup} collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <img className={styles.ImgBrand} src={Rasm} />
                </Navbar.Brand>
                <Navbar.Toggle
                  className={styles.NavbarMenuMedia}
                  aria-controls="responsive-navbar-nav"
                />
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
                    <Nav.Link href="#medicine">
                      <p>Dorilar</p>
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
                  chunki endi siz uydan chiqmasdan yoki ish joyingizdan
                  chiqmasdan dori tanlashingiz mumkin.
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
              {/* <img classname={styles.MenuImgRasm} src={person} /> */}
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <section id="service"></section>
        <div className={styles.ServiceMenu}>
          <div className={styles.ServiceMenuText}>
            <p className={styles.ServiceMenuText1}>
              Bizning Eng Yaxshi Xizmatlarimiz
            </p>
            <p className={styles.ServiceMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.ServiceMenuCard}>
            <div className={styles.ServiceMenuCard1}>
              {/* Card Group */}
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-ambulance fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Afzalliklar</p>
                  <p className={styles.CardTextSmall}>
                    Siz uyingizdan chiqmagan holda dori buyurtma berasiz va biz
                    yetkazib beramiz.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-user-md fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Qulayliklari</p>
                  <p className={styles.CardTextSmall}>
                    Siz bizning Malakali doctorlarimizdan istalgan vaqt maslahat
                    olishingiz mumkin.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-book-medical fa-2x "></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Yaxshi G'amxo'rlik</p>
                  <p className={styles.CardTextSmall}>
                    Agar sizning imkoniyatingiz cheklangan bo'lsa biz sizga
                    yordam beramiz.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ServiceMenuCard1}>
              {/* Card Group */}
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-headset fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Favqulodda Yordam</p>
                  <p className={styles.CardTextSmall}>
                    Sizga Favqulodda tezkor yordam kerakmi, unda bizga murojaat
                    qiling.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-book-medical fa-2x "></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>Ma'lumot uchun</p>
                  <p className={styles.CardTextSmall}>
                    Siz kerakli dorilaringiz haqida ba'tafsil shu yerda ma'lumot
                    olishingiz mumkin.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className={styles.Card}
              >
                <div className={styles.CardIcons}>
                  <i class="fas fa-user-clock fa-2x"></i>
                </div>
                <div className={styles.CardText} style={{ width: "60%" }}>
                  <p className={styles.CardTextBold}>24 Soatlik Xizmat</p>
                  <p className={styles.CardTextSmall}>
                    Bizga sizga 24/7 xizmat ko'rsatamiz. Siz biz bilan xoxlagan
                    vaqtingiz bog'lanishingiz mumkin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="List"></section>
        <div className={styles.ListMenu}>
          <div className={styles.ListMenuText}>
            <p className={styles.ListMenuText1}>
              Bizning Eng yaxshi Dorixonalarimiz
            </p>
            <p className={styles.ListMenuText2}>
              Semper integer est quis leo, nunc. Quis lectus amet aenean massa
              turpis senectus pulvinar. Pharetra gravida volutpat faucibus
              faucibus. Quis lectus amet aenean massa turpis senectus pulvinar.
              Pharetra gravida volutpat faucibus faucibus.
            </p>
          </div>
          <div className={styles.SliderMenu}>
            {" "}
            <ImageSlider />
          </div>
        </div>
      </Container>
      <section id="medicine"></section>
      <div>
        <CardGroup />
      </div>
    </div>
  );
}
