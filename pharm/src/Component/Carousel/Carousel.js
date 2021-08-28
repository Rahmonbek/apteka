import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import styles from "../Css/SliderGroup.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rasm from "../img/slider1.jpg";
import Rasm1 from "../img/slider2.jpg";
import Rasm2 from "../img/slider3.jpg";
import Rasm3 from "../img/slider4.jpg";
import Rasm4 from "../img/slider5.jpg";

export default function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500, //500
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000, //2000
    pauseOnHover: true,
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
          <div className={styles.card_wrapper}>
            <div className={styles.Card}>
              <div className={styles.card_image}>
                <img src={Rasm1} className="img-fluid" />
              </div>
              <div className={styles.CardBody}>
                <p>Ar-Roziy farm</p>
                <p>Ish vaqti 8:00 dan 18:00 gacha.</p>
              </div>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={styles.social_icons}
              >
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
              <div className={styles.details}>
                <h5>
                  <p className={styles.AddressPlace}> Manzil:</p>
                  <p className={styles.JobTitle}>
                    Toshkent, Yunusobod tumani, 2-kvartal, 7B
                  </p>
                </h5>
                <h5>
                  <a href="#">
                    <p class="fas fa-phone-alt"></p>
                    <p>Bog'lanish</p>
                  </a>
                  <a href="#">
                    <p class="fas fa-map-marker-alt"></p>
                    <p>Xaritada ko'rish</p>
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className={styles.card_wrapper}>
            <div className={styles.Card}>
              <div className={styles.card_image}>
                <img src={Rasm2} class="img-fluid" />
              </div>
              <div className={styles.CardBody}>
                <p>Dori-Darmon</p>
                <p>Ish vaqti 7:00 dan 21:00 gacha.</p>
              </div>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={styles.social_icons}
              >
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
              <div className={styles.details}>
                <h5>
                  <p className={styles.AddressPlace}> Manzil:</p>
                  <p className={styles.JobTitle}>
                    Toshkent, Yunusobod tumani, 2-kvartal, 7B
                  </p>
                </h5>
                <h5>
                  <a href="#">
                    <p class="fas fa-phone-alt"></p>
                    <p>Bog'lanish</p>
                  </a>
                  <a href="#">
                    <p class="fas fa-map-marker-alt"></p>
                    <p>Xaritada ko'rish</p>
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className={styles.card_wrapper}>
            <div className={styles.Card}>
              <div className={styles.card_image}>
                <img src={Rasm3} class="img-fluid" />
              </div>
              <div className={styles.CardBody}>
                <p>Eco Med Dorixona</p>
                <p>Bizning ish foaliyatimiz 24/7</p>
              </div>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={styles.social_icons}
              >
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
              <div className={styles.details}>
                <h5>
                  <p className={styles.AddressPlace}> Manzil:</p>
                  <p className={styles.JobTitle}>
                    Toshkent, Yunusobod tumani, 2-kvartal, 7B
                  </p>
                </h5>
                <h5>
                  <a href="#">
                    <p class="fas fa-phone-alt"></p>
                    <p>Bog'lanish</p>
                  </a>
                  <a href="#">
                    <p class="fas fa-map-marker-alt"></p>
                    <p>Xaritada ko'rish</p>
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className={styles.card_wrapper}>
            <div className={styles.Card}>
              <div className={styles.card_image}>
                <img src={Rasm} class="img-fluid" />
              </div>
              <div className={styles.CardBody}>
                <p>777 Dorixona</p>
                <p>Ish vaqti 7:00 dan 22:00 gacha.</p>
              </div>
              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={styles.social_icons}
              >
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
              <div className={styles.details}>
                <h5>
                  <p className={styles.AddressPlace}> Manzil:</p>
                  <p className={styles.JobTitle}>
                    Toshkent, Yunusobod tumani, 2-kvartal, 7B
                  </p>
                </h5>
                <h5>
                  <a href="#">
                    <p class="fas fa-phone-alt"></p>
                    <p>Bog'lanish</p>
                  </a>
                  <a href="#">
                    <p class="fas fa-map-marker-alt"></p>
                    <p>Xaritada ko'rish</p>
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className={styles.card_wrapper}>
            <div className={styles.Card}>
              <div className={styles.card_image}>
                <img src={Rasm4} class="img-fluid" />
              </div>
              <div className={styles.CardBody}>
                <p>IMVITANO Dorixona</p>
                <p>Ish vaqti 7:00 dan 22:00 gacha.</p>
              </div>

              <ul
                style={{ listStyleType: "none", textDecoration: "none" }}
                className={styles.social_icons}
              >
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-envelope"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
              <div className={styles.details}>
                <h5>
                  <p className={styles.AddressPlace}> Manzil:</p>
                  <p className={styles.JobTitle}>
                    Toshkent, Yunusobod tumani, 2-kvartal, 7B
                  </p>
                </h5>
                <h5>
                  <a href="#">
                    <p class="fas fa-phone-alt"></p>
                    <p>Bog'lanish</p>
                  </a>
                  <a href="#">
                    <p class="fas fa-map-marker-alt"></p>
                    <p>Xaritada ko'rish</p>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}
