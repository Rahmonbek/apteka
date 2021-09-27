import React from "react";
import { Nav, Navbar, Container, Row, Col, Card } from "react-bootstrap";
import styles from "../Css/SliderGroup.module.css";
import style from "../Css/Carosuel.module.css";
import Rasm from "../img/slider1.jpg";
import Rasm1 from "../img/slider2.jpg";
import Rasm2 from "../img/slider3.jpg";
import Rasm3 from "../img/slider4.jpg";
import Rasm4 from "../img/slider5.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiPhoneCall } from "react-icons/fi";
import { Image } from "react-bootstrap";

export default function CarouselSlider() {
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const x = "#";

  return (
    <div className={style.CarosuelMe}>
      <div className={style.SliderMenuText}>
        <p className={style.SliderMenuText1}>Eng Yaxshi Dorixonalar Ruyhati</p>
        <p className={style.SliderMenuText2}>
          Semper integer est quis leo, nunc. Quis lectus amet aenean massa
          turpis senectus pulvinar. Pharetra gravida volutpat faucibus faucibus.
          Quis lectus amet aenean massa turpis senectus pulvinar. Pharetra
          gravida volutpat faucibus faucibus.
        </p>
      </div>
      <Carousel
        className={style.CarouselMenu}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        responsive={responsive1}
      >
        <div className={style.news_item}>
          <Card className={style.Card}>
            <Card.Img variant="top" src={Rasm} className="img-fluid" />
            <svg
              className={style.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                {" "}
              </path>
            </svg>
            <div
              // style={{ paddingTop: "10px" }}
              className={style.CardFooterText1}
            >
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>{" "}
            <div className={style.social_icons_Item}>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={style.social_icons}
              >
                <li>
                  <a href={x}>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.CallMeGroup}>
              <i>
                <FiPhoneCall className={style.CallMeGroupIcon} />
              </i>
            </div>
          </Card>
        </div>
        <div className={style.news_item}>
          <Card className={style.Card}>
            <Card.Img variant="top" src={Rasm1} />
            <svg
              className={style.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div
              // style={{ paddingTop: "10px" }}
              className={style.CardFooterText1}
            >
              {/* style={{ marginTop: "8px" }} bu dori darmonniki */}
              <p>Dori-Darmon</p>
              <p>
                {/* style={{ marginTop: "-6px" }}  bu adressniki*/} Toshkent,
                Yunusobod tumani, 2-kvartal, 7B
              </p>
            </div>{" "}
            <div className={style.social_icons_Item}>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={style.social_icons}
              >
                <li>
                  <a href={x}>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.CallMeGroup}>
              <i>
                <FiPhoneCall className={style.CallMeGroupIcon} />
              </i>
            </div>
          </Card>
        </div>

        <div className={style.news_item}>
          <Card className={style.Card}>
            <Card.Img variant="top" src={Rasm3} className="img-fluid" />
            <svg
              className={style.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div
              // style={{ paddingTop: "10px" }}
              className={style.CardFooterText1}
            >
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>{" "}
            <div className={style.social_icons_Item}>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={style.social_icons}
              >
                <li>
                  <a href={x}>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.CallMeGroup}>
              <i>
                <FiPhoneCall className={style.CallMeGroupIcon} />
              </i>
            </div>
          </Card>
        </div>
        <div className={style.news_item}>
          <Card className={style.Card}>
            <Card.Img variant="top" src={Rasm4} />
            <svg
              className={style.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div className={style.CallMeGroup}>
              <i>
                <FiPhoneCall className={style.CallMeGroupIcon} />
              </i>
            </div>
            <div
              // style={{ paddingTop: "10px" }}
              className={style.CardFooterText1}
            >
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>{" "}
            <div className={style.social_icons_Item}>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={style.social_icons}
              >
                <li>
                  <a href={x}>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className={style.CallMeGroup}>
              <i>
                <FiPhoneCall className={style.CallMeGroupIcon} />
              </i>
            </div> */}
          </Card>
        </div>
        <div className={style.news_item}>
          <Card className={style.Card}>
            <Card.Img variant="top" src={Rasm2} />
            <svg
              className={style.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div  className={style.CardFooterText1}>
              <p >Dori-Darmon</p>
              <p >
                {" "}
                Toshkent, Yunusobod tumani, 2-kvartal, 7B
              </p>
            </div>
            <div className={style.social_icons_Item}>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={style.social_icons}
              >
                <li>
                  <a href={x}>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href={x}>
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.CallMeGroup}>
              <i>
                <FiPhoneCall className={style.CallMeGroupIcon} />
              </i>
            </div>
          </Card>
        </div>
      </Carousel>
    </div>
  );
}
