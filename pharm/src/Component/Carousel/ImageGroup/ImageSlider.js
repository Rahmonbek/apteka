import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import styles from "../../Css/SliderGroup.module.css";
import Rasm from "../../img/slider1.jpg";
import Rasm1 from "../../img/slider2.jpg";
import Rasm2 from "../../img/slider3.jpg";
import Rasm3 from "../../img/slider4.jpg";
import Rasm4 from "../../img/slider5.jpg";
import { FiPhoneCall } from "react-icons/fi";

function ImageSlider() {
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

  const x = "#";

  return (
    <>
      <Slider className={styles.SliderMenuItem} {...settings}>
        <div className={styles.card_wrapper}>
          <div className={styles.Card}>
            <div className={styles.card_image}>
              <Image src={Rasm1} className="img-fluid" />
            </div>

            <svg
              className={styles.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div id={styles.CallMeGroup}>
              <i>
                <FiPhoneCall id={styles.CallMeGroupIcon} />
              </i>
            </div>
            <div id={styles.CardBody}>
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>

            <ul
              style={{ listStyleType: "none", textDecoration: "none" }}
              className={styles.social_icons}
            >
              <li>
                <a href={x}>
                  <i
                    style={{ marginLeft: "-5.5px" }}
                    class="fab fa-facebook-f"
                  ></i>
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
            <div id={styles.details}>
              <h5>
                <p className={styles.AddressPlace}> Manzil:</p>
                <p className={styles.JobTitle}>
                  Toshkent, Yunusobod tumani, 2-kvartal, 7B
                </p>
              </h5>
              <h5>
                <a href={x}>
                  <p class="fas fa-phone-alt"></p>
                  <p>Bog'lanish</p>
                </a>
                <a href={x}>
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
              <Image src={Rasm2} class="img-fluid" />
            </div>
            <svg
              className={styles.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div id={styles.CallMeGroup}>
              <i>
                <FiPhoneCall id={styles.CallMeGroupIcon} />
              </i>
            </div>
            <div id={styles.CardBody}>
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>
            <ul
              style={{ listStyleType: "none", textDecoration: "none" }}
              className={styles.social_icons}
            >
              <li>
                <a href={x}>
                  <i
                    style={{ marginLeft: "-5.5px" }}
                    class="fab fa-facebook-f"
                  ></i>
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
            <div id={styles.details}>
              <h5>
                <p className={styles.AddressPlace}> Manzil:</p>
                <p className={styles.JobTitle}>
                  Toshkent, Yunusobod tumani, 2-kvartal, 7B
                </p>
              </h5>
              <h5>
                <a href={x}>
                  <p class="fas fa-phone-alt"></p>
                  <p>Bog'lanish</p>
                </a>
                <a href={x}>
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
              <Image src={Rasm3} class="img-fluid" />
            </div>
            <svg
              className={styles.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div id={styles.CallMeGroup}>
              <i>
                <FiPhoneCall id={styles.CallMeGroupIcon} />
              </i>
            </div>
            <div id={styles.CardBody}>
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>
            <ul
              style={{ listStyleType: "none", textDecoration: "none" }}
              className={styles.social_icons}
            >
              <li>
                <a href={x}>
                  <i
                    style={{ marginLeft: "-5.5px" }}
                    class="fab fa-facebook-f"
                  ></i>
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
            <div id={styles.details}>
              <h5>
                <p className={styles.AddressPlace}> Manzil:</p>
                <p className={styles.JobTitle}>
                  Toshkent, Yunusobod tumani, 2-kvartal, 7B
                </p>
              </h5>
              <h5>
                <a href={x}>
                  <p class="fas fa-phone-alt"></p>
                  <p>Bog'lanish</p>
                </a>
                <a href={x}>
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
              <Image src={Rasm} class="img-fluid" />
            </div>
            <svg
              className={styles.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div id={styles.CallMeGroup}>
              <i>
                <FiPhoneCall id={styles.CallMeGroupIcon} />
              </i>
            </div>
            <div id={styles.CardBody}>
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>
            <ul
              style={{ listStyleType: "none", textDecoration: "none" }}
              className={styles.social_icons}
            >
              <li>
                <a href={x}>
                  <i
                    style={{ marginLeft: "-5.5px" }}
                    class="fab fa-facebook-f"
                  ></i>
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
            <div id={styles.details}>
              <h5>
                <p className={styles.AddressPlace}> Manzil:</p>
                <p className={styles.JobTitle}>
                  Toshkent, Yunusobod tumani, 2-kvartal, 7B
                </p>
              </h5>
              <h5>
                <a href={x}>
                  <p class="fas fa-phone-alt"></p>
                  <p>Bog'lanish</p>
                </a>
                <a href={x}>
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
              <Image src={Rasm4} class="img-fluid" />
            </div>
            <svg
              className={styles.Curved}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#184E61"
                fill-opacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,181.3C384,160,480,96,576,64C672,32,768,32,864,53.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div id={styles.CallMeGroup}>
              <i>
                <FiPhoneCall id={styles.CallMeGroupIcon} />
              </i>
            </div>
            <div id={styles.CardBody}>
              <p>Dori-Darmon</p>
              <p> Toshkent, Yunusobod tumani, 2-kvartal, 7B</p>
            </div>

            <ul
              style={{ listStyleType: "none", textDecoration: "none" }}
              className={styles.social_icons}
            >
              <li>
                <a href={x}>
                  <i
                    style={{ marginLeft: "-5.5px" }}
                    class="fab fa-facebook-f"
                  ></i>
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
            <div id={styles.details}>
              <h5>
                <p className={styles.AddressPlace}> Manzil:</p>
                <p className={styles.JobTitle}>
                  Toshkent, Yunusobod tumani, 2-kvartal, 7B
                </p>
              </h5>
              <h5>
                <a href={x}>
                  <p class="fas fa-phone-alt"></p>
                  <p>Bog'lanish</p>
                </a>
                <a href={x}>
                  <p class="fas fa-map-marker-alt"></p>
                  <p>Xaritada ko'rish</p>
                </a>
              </h5>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default ImageSlider;
